import axios from 'axios';

export const API_KEY = '14ce8915ef52d801924d89668f2ca827';
export const BASE_URL = 'https://api.themoviedb.org/3';
export const FETCH_BY_NAME_PATH = 'https://api.themoviedb.org/3/search/movie';
export const IMG_PATH = 'https://image.tmdb.org/t/p/original';

export const fetchTrendingMovies = async () =>
  await axios.get(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`);

export const fetchMovieDetails = async movieId =>
  await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);

export const fetchCastByMovie = async movieId =>
  await axios.get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);

export const fetchReviewsByMovie = async movieId =>
  await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&page=1`
  );

export const fetchBySearchMovie = async query =>
  await axios.get(
    `${BASE_URL}/search/movie/?api_key=${API_KEY}&query=${query}&page=${1}`
  );
