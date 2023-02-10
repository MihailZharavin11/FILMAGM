export type Movie = {
  id: string;
  image: string;
  title: string;
  releaseDate: string;
  genre: TGenre[];
  runtime: number;
};

type TGenre = {
  id: string;
  name: string;
};
