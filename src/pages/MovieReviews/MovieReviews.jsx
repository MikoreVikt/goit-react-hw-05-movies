import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsByMovie } from 'components/Api/Api';
import { MovieReviewsList, MovieReviewsItem } from './MovieReviews.styled';
import { MovieDetailsTitle } from 'pages/MovieCast/MovieCast.styled';
import { Wrapper } from 'pages/MovieCast/MovieCast.styled';
import { BtnToTop } from 'components/BtnToTop/BtnToTop';
import { Loader } from 'components/Loader/Loader';

const MovieReviews = () => {
  const [reviewsByMovie, setReviewsByMovie] = useState();
  const [loading, setLoading] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    (async function getReviewsByMovie() {
      try {
        const res = await fetchReviewsByMovie(movieId);
        await setReviewsByMovie(res.data.results);
        await await setLoading(false);
      } catch {
        console.log(`Ooops!`);
      }
    })();
  }, [movieId]);

  useEffect(() => {
    window.scrollTo({ top: 700, behavior: 'smooth' });
  }, [reviewsByMovie]);

  if (!reviewsByMovie) return;

  return (
    <Wrapper>
      <MovieDetailsTitle>Reviews</MovieDetailsTitle>
      <MovieReviewsList>
        {reviewsByMovie.length > 0 ? (
          reviewsByMovie.map(({ id, author, content }) => (
            <MovieReviewsItem key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </MovieReviewsItem>
          ))
        ) : (
          <p
            style={{
              display: 'flex',
              justifyContent: 'center',
              color: 'white',
            }}
          >
            We don't have any reviews for this movie!
          </p>
        )}
      </MovieReviewsList>
      <BtnToTop />
      <Loader loading={loading} />
    </Wrapper>
  );
};

export default MovieReviews;
