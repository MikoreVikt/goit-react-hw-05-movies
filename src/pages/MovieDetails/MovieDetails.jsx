import { useState, useEffect, Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  GoBackLink,
  MovieDetailsImg,
  MovieName,
  MovieUserScore,
  MovieDetailsTitle,
  MovieDetailsData,
} from './MovieDetails.styled';
import { StyledLink } from 'components/AppBar/AppBar.styled';
import { fetchMovieDetails, IMG_PATH } from 'components/Api/Api';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const [movieData, setMovieData] = useState({});
  const [loading] = useState(true);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    (async function getFilmById() {
      try {
        const res = await fetchMovieDetails(movieId);
        await setMovieData(res.data);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch {
        console.log(`Oops! Something went wrong! Try again!`);
      }
    })();
  }, [movieId]);

  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = movieData;

  if (!release_date) return;

  return (
    <>
      <GoBackLink to={location.state?.from ?? '/'}>Go back</GoBackLink>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '30px',
        }}
      >
        <MovieDetailsImg src={IMG_PATH + poster_path} alt={original_title} />
        <div style={{ maxWidth: '500px', marginLeft: '30px' }}>
          <MovieName>
            {original_title + ` (${new Date(release_date).getFullYear()})`}
          </MovieName>
          <MovieUserScore>
            User score: {Math.round(vote_average * 10)}%
          </MovieUserScore>
          <MovieDetailsTitle>Overview</MovieDetailsTitle>
          <MovieDetailsData>{overview}</MovieDetailsData>
          <MovieDetailsTitle>Genres</MovieDetailsTitle>
          <MovieDetailsData>
            {genres.map(genre => genre.name).join(', ')}
          </MovieDetailsData>
          <div>
            <MovieDetailsTitle>Additional information</MovieDetailsTitle>
            <div style={{ display: 'flex', columnGap: '20px' }}>
              <StyledLink
                to="cast"
                state={{ from: location.state?.from ?? '/' }}
              >
                Cast
              </StyledLink>
              <StyledLink
                to="reviews"
                state={{ from: location.state?.from ?? '/' }}
              >
                Reviews
              </StyledLink>
            </div>
          </div>
        </div>
      </div>
      <Suspense fallback={<Loader loading={loading} />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
