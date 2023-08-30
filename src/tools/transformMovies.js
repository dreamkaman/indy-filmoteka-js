import { transformGenres } from './transformGenres';
import { getYear } from './getYear';

export const transformPopularMovies = (popularMovies, allGenres) => {
  const transformedPopularMovies = popularMovies.map((popularMovie) => {
    const { genre_ids, title, release_date, poster_path } = popularMovie;

    const newMovie = {
      title,
      year: getYear(release_date),
      posterPath: `https://www.themoviedb.org/t/p/w1280${poster_path}`,
      genres: transformGenres(genre_ids, allGenres),
    };
    return newMovie;
  });

  return transformedPopularMovies;
};
