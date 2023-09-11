import { transformGenres } from './transformGenres';
import { getYear } from './getYear';
import img from '../assets/noposter.jpg';

export const transformSelectedMovie = (movie, allGenres) => {
	const { title, release_date, poster_path, genre_ids } = movie;
	const newMovie = {
		...movie,
		title: title.length < 40 ? title : title.slice(0, 37) + '...',
		release_date: getYear(release_date) || 'Unknown release date',
		poster_path: poster_path ? `https://www.themoviedb.org/t/p/w1280${poster_path}` : img,
		genre_ids: genre_ids.length
			? transformGenres(genre_ids, allGenres).genresStr
			: 'Unknown genres',
	};

	return newMovie;
};
