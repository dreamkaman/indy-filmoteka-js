export const transformGenres = (genresId, allGenres) => {
	const newGenres = genresId.map((genreId) => {
		const foundGenre = allGenres.find((genreItem) => Number(genreItem.id) === Number(genreId));

		return foundGenre?.name;
	});

	const genresStr = newGenres.length ? newGenres.join(', ') : 'unknown';

	const genresFull = genresStr;

	if (genresStr.length > 35) {
		return { genresStr: genresStr.slice(0, 32) + '...', genresFull };
	}
	return { genresStr, genresFull };
};
