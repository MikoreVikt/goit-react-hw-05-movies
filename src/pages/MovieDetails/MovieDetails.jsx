import { useState, useEffect, Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  GoBackLink,
  MovieName,
  MovieUserScore,
  MovieDetailsTitle,
  MovieDetailsData,
} from './MovieDetails.styled';
import { StyledLink } from 'components/AppBar/AppBar.styled';
import { fetchMovieInfo } from 'components/Api/Api';
import { IMG_PATH } from 'components/Api/Api';

const MovieDetails = () => {
  const [movieData, setMovieData] = useState({});
  const { movieId } = useParams();

  const location = useLocation();

  useEffect(() => {
    fetchMovieInfo(movieId, '').then(setMovieData);
    window.scrollTo({
      top: 0,
    });
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
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <GoBackLink to={location.state?.from ?? '/'}>Go back</GoBackLink>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '30px',
        }}
      >
        <img src={IMG_PATH + poster_path} alt={original_title} width={300} />
        <div style={{ marginLeft: '30px', maxWidth: '500px' }}>
          <MovieName>
            {original_title + `(${new Date(release_date).getFullYear()})`}
          </MovieName>
          <MovieUserScore>
            <span>User score:</span>
            {Math.round(vote_average * 10)}%
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
      <Suspense fallback={null}>
        <Outlet context={[movieId]} />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
