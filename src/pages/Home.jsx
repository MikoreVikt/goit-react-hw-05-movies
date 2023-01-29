import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'components/Api/Api';
import { MovieList } from 'components/MovieList/MovieList';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(res => {
      setTrendMovies(res.results);
    });
  }, []);

  return <MovieList moviesArr={trendMovies} />;
};

export default Home;
