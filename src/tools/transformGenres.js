export const transformGenres = (genresId, allGenres) => {
	console.log(genresId);

	const newGenres = genresId.map((genreId) => {
		const foundGenre = allGenres.find((genreItem) => genreItem.id === genreId);

		return foundGenre?.name;
	});

	const genresStr = newGenres.join(', ');

	if (genresStr.length > 40) {
		return genresStr.slice(0, 37) + '...';
	}
	return genresStr;
};
