import { transformGenres } from './transformGenres';
import { getYear } from './getYear';
import img from '../assets/noposter.jpg';

export const transformPopularMovies = (popularMovies, allGenres) => {
	const transformedPopularMovies = popularMovies.map((popularMovie) => {
		const { id, genre_ids, title, release_date, poster_path } = popularMovie;
		const newMovie = {
			id,
			titleFull: title,
			title: title.length < 40 ? title : title.slice(0, 37) + '...',
			year: getYear(release_date) || 'Unknown release date',
			posterPath: poster_path ? `https://www.themoviedb.org/t/p/w1280${poster_path}` : img,
			genres: genre_ids?.length
				? transformGenres(genre_ids, allGenres).genresStr
				: 'Unknown genres',
			genresFull: genre_ids?.length
				? transformGenres(genre_ids, allGenres).genresFull
				: 'Unknown genres',
		};

		return newMovie;
	});

	return transformedPopularMovies;
};
