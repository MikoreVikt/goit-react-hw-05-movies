import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastByMovie, IMG_PATH } from 'components/Api/Api';
import actorPlaceholder from '../../images/actor-placeholder.jpg';
import { BtnToTop } from 'components/BtnToTop/BtnToTop';
import { Loader } from 'components/Loader/Loader';
import {
  Wrapper,
  MovieDetailsTitle,
  MovieCastList,
  MovieCastItem,
  MovieCastImg,
  MovieActorData,
} from './MovieCast.styled';

const MovieCast = () => {
  const [castByMovie, setCastByMovie] = useState();
  const [loading, setLoading] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    (async function getCastByMovie() {
      try {
        const res = await fetchCastByMovie(movieId);
        setCastByMovie(res.data.cast);
        setLoading(false);
      } catch {
        console.log(`Ooops!`);
      }
    })();
  }, [movieId]);

  useEffect(() => {
    window.scrollTo({ top: 700, behavior: 'smooth' });
  }, [castByMovie]);

  if (!castByMovie) return;

  return (
    <Wrapper>
      <MovieDetailsTitle>Cast</MovieDetailsTitle>
      <MovieCastList>
        {castByMovie.length > 0 ? (
          castByMovie.map(({ id, profile_path, original_name, character }) => (
            <MovieCastItem key={id}>
              {profile_path ? (
                <MovieCastImg
                  src={IMG_PATH + profile_path}
                  alt={original_name}
                  width={200}
                  height={300}
                />
              ) : (
                <MovieCastImg
                  src={actorPlaceholder}
                  alt={original_name}
                  width={200}
                  height={300}
                />
              )}
              <MovieActorData>{original_name}</MovieActorData>
              <MovieActorData>
                Character: <span>{character}</span>
              </MovieActorData>
            </MovieCastItem>
          ))
        ) : (
          <p
            style={{
              display: 'flex',
              justifyContent: 'center',
              color: 'white',
            }}
          >
            We don't have any casts for this movie!
          </p>
        )}
      </MovieCastList>
      <BtnToTop />
      <Loader loading={loading} />
    </Wrapper>
  );
};

export default MovieCast;
