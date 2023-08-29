export const transformGenres = (genresId, allGenres) => {
  const newGenres = genresId.map((genreId) => {
    const foundGenre = allGenres.find((genreItem) => genreItem.id === genreId);

    return foundGenre?.name;
  });

  const genresStr = newGenres.join(', ');
  console.log(genresStr.length);

  if (genresStr.length > 40) {
    return genresStr.slice(0, 37) + '...';
  }
  return genresStr;
};
