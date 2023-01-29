export const API_KEY = '14ce8915ef52d801924d89668f2ca827';
export const BASE_URL = 'https://api.themoviedb.org/3';
export const FETCH_BY_NAME_PATH = 'https://api.themoviedb.org/3/search/movie';
export const IMG_PATH = 'https://image.tmdb.org/t/p/original';

export const fetchTrendingMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieByName = async query => {
  try {
    const response = await fetch(
      `${FETCH_BY_NAME_PATH}?api_key=${API_KEY}&query=${query}`
    );

    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieInfo = async (movieId, info) => {
  let response = {};
  try {
    if (info === '') {
      response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
    } else {
      response = await fetch(
        `${BASE_URL}/movie/${movieId}/${info}?api_key=${API_KEY}`
      );
    }

    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
