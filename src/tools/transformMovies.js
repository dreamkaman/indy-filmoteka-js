import { transformGenres } from './transformGenres';
import { getYear } from './getYear';
import img from '../assets/noposter.jpg';

export const transformMovies = (movies, allGenres) => {
	const transformedPopularMovies = movies.map((movie) => {
		const {
			id,
			genre_ids,
			title,
			release_date,
			poster_path,
			vote_average,
			vote_count,
			popularity,
			original_title,
		} = movie;
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
			voteAverage: vote_average,
			voteCount: vote_count,
			popularity,
			originalTitle: original_title,
		};

		return newMovie;
	});

	return transformedPopularMovies;
};
