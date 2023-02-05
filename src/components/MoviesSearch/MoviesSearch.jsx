import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { fetchBySearchMovie } from 'components/Api/Api';
import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';
import {
  Wrapper,
  SearchTitle,
  SearchInput,
  SearchForm,
  SearchButton,
} from './MoviesSearch.styled';

const MoviesSearch = () => {
  const [query, setQuery] = useState('');
  const [requestedMovies, setRequestedMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const savedQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!savedQuery) {
      setRequestedMovies([]);
      setLoading(false);
      return;
    }
    (async function getSearchQuery() {
      try {
        const res = await fetchBySearchMovie(savedQuery);
        await setRequestedMovies(res.data.results);
        await setLoading(false);
      } catch {
        console.log('Oops! Something went wrong! Try again!');
      }
    })();
  }, [savedQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    if (!query.trim() || savedQuery === query.trim().toLowerCase()) {
      setLoading(false);
      return;
    }
    setSearchParams({ query: query.trim().toLowerCase() });
    setQuery('');
  };

  return (
    <>
      <Wrapper>
        <SearchTitle>Movie search</SearchTitle>
        <SearchForm onSubmit={handleSubmit}>
          <SearchInput
            onChange={e => {
              setQuery(e.target.value);
            }}
            value={query}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Enter a search query"
          />
          <SearchButton type="submit">
            <AiOutlineSearch />
          </SearchButton>
        </SearchForm>
      </Wrapper>
      <MovieList moviesArr={requestedMovies} />
      <Loader loading={loading} />
    </>
  );
};

export default MoviesSearch;
