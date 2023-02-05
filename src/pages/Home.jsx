import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'components/Api/Api';
import { MovieList } from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function getTrendingMovies() {
      try {
        const res = await fetchTrendingMovies();
        await setTrendingMovies(res.data.results);
        await setLoading(false);
      } catch {
        console.log(`Oops! Something went wrong! Try again!`);
      }
    })();
  }, []);

  return (
    <>
      <h2
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '30px',
          marginBottom: '30px',
          color: 'white',
          textTransform: 'uppercase',
        }}
      >
        Trending today
      </h2>
      <MovieList moviesArr={trendingMovies} />
      <Loader loading={loading} />
    </>
  );
};

export default Home;
