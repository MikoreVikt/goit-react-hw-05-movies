import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { fetchMovieInfo } from 'components/Api/Api';
import { IMG_PATH } from 'components/Api/Api';
import {
  Wrapper,
  MovieCastList,
  MovieCastItem,
  MovieDetailsTitle,
  MovieCastImg,
  MovieCastWithOutImg,
  MovieActorData,
} from './MovieCast.styled';

const MovieCast = () => {
  const [movieId] = useOutletContext();
  const [movieCredits, setMovieCredits] = useState(null);

  useEffect(() => {
    fetchMovieInfo(movieId, 'credits').then(setMovieCredits);
  }, [movieId]);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 600,
        left: 0,
        behavior: 'smooth',
      });
    }, 300);
  }, [movieCredits]);

  if (!movieCredits) return;

  return (
    <>
      <Wrapper>
        <MovieDetailsTitle>Cast</MovieDetailsTitle>
        <MovieCastList>
          {movieCredits.cast.length > 0 ? (
            movieCredits.cast.map(
              ({ id, profile_path, original_name, character }) => (
                <MovieCastItem key={id}>
                  {profile_path ? (
                    <MovieCastImg
                      src={IMG_PATH + profile_path}
                      alt={original_name}
                      width={200}
                      height={250}
                    />
                  ) : (
                    <MovieCastWithOutImg>Image not found</MovieCastWithOutImg>
                  )}
                  <MovieActorData>{original_name}</MovieActorData>
                  <MovieActorData>
                    Character: <span>{character}</span>
                  </MovieActorData>
                </MovieCastItem>
              )
            )
          ) : (
            <h4>We don't have any cast for this movie.</h4>
          )}
        </MovieCastList>
      </Wrapper>
    </>
  );
};

export default MovieCast;
