import { useLocation } from 'react-router-dom';
import { IMG_PATH } from 'components/Api/Api';
import { MovieUl, MovieItem, MovieLink, MovieTitle } from './MovieList.styled';

export const MovieList = ({ moviesArr }) => {
  const location = useLocation();

  if (moviesArr.results === []) {
    return;
  }

  return (
    <MovieUl>
      {moviesArr.map(({ id, original_title, poster_path }) => (
        <MovieItem key={id}>
          <MovieLink to={`/movies/${id}`} state={{ from: location }}>
            <img
              src={IMG_PATH + poster_path}
              alt={original_title}
              width={240}
              height={320}
            />
            <MovieTitle>{original_title}</MovieTitle>
          </MovieLink>
        </MovieItem>
      ))}
    </MovieUl>
  );
};
