import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { fetchMovieInfo } from 'components/Api/Api';
import { MovieDetailsTitle } from 'pages/MovieCast/MovieCast.styled';
import { MovieReviewsItem, MovieReviewsList } from './MovieReviews.styled';
import { Wrapper } from 'pages/MovieCast/MovieCast.styled';

const MovieReviews = () => {
  const [movieId] = useOutletContext();
  const [movieReviews, setMovieReviews] = useState(null);

  useEffect(() => {
    fetchMovieInfo(movieId, 'reviews').then(res =>
      setMovieReviews(res.results)
    );
  }, [movieId]);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 600,
        left: 0,
        behavior: 'smooth',
      });
    }, 500);
  }, [movieReviews]);

  if (!movieReviews) return;

  return (
    <Wrapper>
      <MovieDetailsTitle>Reviews</MovieDetailsTitle>
      <MovieReviewsList>
        {movieReviews.length > 0 ? (
          movieReviews.map(review => (
            <MovieReviewsItem key={review.id}>
              <h3
                style={{
                  marginBottom: '10px',
                }}
              >
                Author:{review.author}
              </h3>
              <p>{review.content}</p>
            </MovieReviewsItem>
          ))
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )}
      </MovieReviewsList>
    </Wrapper>
  );
};

export default MovieReviews;
