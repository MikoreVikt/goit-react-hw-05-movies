import { useLocation } from 'react-router-dom';
import { IMG_PATH } from 'components/Api/Api';
import { MovieUl, MovieItem, MovieLink, MovieTitle } from './MovieList.styled';
import defaultMovieLogo from '../../images/logo-movie-tape-cinema.png';

export const MovieList = ({ moviesArr }) => {
  const location = useLocation();

  if (moviesArr === []) return;

  return (
    <MovieUl>
      {moviesArr.map(({ id, original_title, original_name, poster_path }) => {
        return (
          <MovieItem key={id}>
            <MovieLink to={`/movies/${id}`} state={{ from: location }}>
              {poster_path ? (
                <img
                  src={IMG_PATH + poster_path}
                  alt={original_title}
                  width={240}
                  height={320}
                />
              ) : (
                <img
                  src={defaultMovieLogo}
                  alt="defaulLogo"
                  width={240}
                  height={320}
                />
              )}
              <MovieTitle>{original_title || original_name}</MovieTitle>
            </MovieLink>
          </MovieItem>
        );
      })}
    </MovieUl>
  );
};
