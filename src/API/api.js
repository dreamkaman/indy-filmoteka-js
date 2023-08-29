const API_KEY = process.env.TMDB_API_READ_ACCESS_TOKEN;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const getPopularMovies = async () => {
  const response = await fetch(
    'https://api.themoviedb.org/3/trending/movie/week?language=en-US',
    options,
  );
  return response;
};
