import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Form, Input } from './MoviesSearch.styled';
import { fetchMovieByName } from 'components/Api/Api';
import { MovieList } from 'components/MovieList/MovieList';

const MoviesSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);

  let savedQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!savedQuery) {
      setSearchMovies([]);
      return;
    }
    fetchMovieByName(savedQuery).then(res => setSearchMovies(res.results));
  }, [savedQuery]);

  const handleSubmit = e => {
    e.preventDefault();

    if (!query.trim() || savedQuery === query.trim().toLowerCase()) {
      setQuery('');
      return;
    }

    setSearchParams({ query: query.trim().toLowerCase() });
    setQuery('');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          onChange={e => setQuery(e.currentTarget.value)}
          value={query}
          name="search"
          type="text"
        />
        <button type="submit">Search</button>
      </Form>

      <MovieList moviesArr={searchMovies} />
    </>
  );
};

export default MoviesSearch;
