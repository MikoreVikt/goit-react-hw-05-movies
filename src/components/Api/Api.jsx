import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const API_KEY = '14ce8915ef52d801924d89668f2ca827';
export const IMG_PATH = 'https://image.tmdb.org/t/p/original';

export const fetchTrendingMovies = async () =>
  await axios.get(`trending/all/day?api_key=${API_KEY}`);

export const fetchMovieDetails = async movieId =>
  await axios.get(`movie/${movieId}?api_key=${API_KEY}`);

export const fetchCastByMovie = async movieId =>
  await axios.get(`movie/${movieId}/credits?api_key=${API_KEY}`);

export const fetchReviewsByMovie = async movieId =>
  await axios.get(`movie/${movieId}/reviews?api_key=${API_KEY}&page=1`);

export const fetchBySearchMovie = async query =>
  await axios.get(`search/movie/?api_key=${API_KEY}&query=${query}&page=1`);
