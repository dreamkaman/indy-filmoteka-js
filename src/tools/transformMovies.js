import { transformGenres } from './transformGenres';
import { getYear } from './getYear';
import img from '../assets/noposter.jpg';

export const transformPopularMovies = (popularMovies, allGenres) => {
	const transformedPopularMovies = popularMovies.map((popularMovie) => {
		const { genre_ids, title, release_date, poster_path } = popularMovie;

		const newMovie = {
			title: title.length < 40 ? title : title.slice(0, 37) + '...',
			year: getYear(release_date) || 'Unknown release date',
			posterPath: poster_path ? `https://www.themoviedb.org/t/p/w1280${poster_path}` : img,
			genres: genre_ids.length ? transformGenres(genre_ids, allGenres) : 'Unknown genres',
		};

		return newMovie;
	});

	return transformedPopularMovies;
};
