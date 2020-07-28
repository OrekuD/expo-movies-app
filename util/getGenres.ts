import { tvGenres } from "../constants/Genres";

export const getGenres = (ids: Array<number>) => {
  const result: Array<string> = [];
  ids.forEach((id) => {
    tvGenres.forEach(({ id: genreId, name }) => {
      if (id === genreId) {
        result.push(name);
      }
    });
  });

  return result;
};
