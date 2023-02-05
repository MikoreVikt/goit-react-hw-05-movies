import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout/Layout';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MoviesSearch = lazy(() => import('./MoviesSearch/MoviesSearch'));
const MoviesDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const MovieCast = lazy(() => import('../pages/MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('../pages/MovieReviews/MovieReviews'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />}>
          <Route index element={<MoviesSearch />} />
          <Route path=":movieId" element={<MoviesDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
