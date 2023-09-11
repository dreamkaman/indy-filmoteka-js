export const transformGenres = (genresId, allGenres) => {
	const newGenres = genresId.map((genreId) => {
		const foundGenre = allGenres.find((genreItem) => Number(genreItem.id) === Number(genreId));

		return foundGenre?.name;
	});

	const genresStr = newGenres.join(', ');

	const genresFull = genresStr;

	if (genresStr.length > 40) {
		return genresStr.slice(0, 37) + '...';
	}
	return { genresStr, genresFull };
};
