const API_KEY = process.env.TMDB_API_READ_ACCESS_TOKEN;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const getPopularMovies = async (page = 1) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?language=en-US&page=${page}`,
    options,
  );
  const data = await response.json();

  return data.results;
};

export const getMoviesGenres = async () => {
  const response = await fetch(
    'https://api.themoviedb.org/3/genre/movie/list?language=en',
    options,
  );

  const data = await response.json();

  return data.genres;
};

export const getTVGenres = async () => {
  const response = await fetch('https://api.themoviedb.org/3/genre/tv/list?language=en', options);

  const data = await response.json();

  return data.genres;
};

getPopularMovies();
