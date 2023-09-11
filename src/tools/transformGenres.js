export const transformGenres = (genresId, allGenres) => {
	const newGenres = genresId.map((genreId) => {
		const foundGenre = allGenres.find((genreItem) => Number(genreItem.id) === Number(genreId));

		return foundGenre?.name;
	});

	const genresStr = newGenres.join(', ');

	const genresFull = genresStr;

	if (genresStr.length > 35) {
		return genresStr.slice(0, 32) + '...';
	}
	return { genresStr, genresFull };
};
