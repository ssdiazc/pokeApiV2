export type previousCustomType = string | null;

export interface PokemonGeneralConsult {
  count: number;
  next: string,
  previous: previousCustomType,
  results: Result[]
}

export interface Result {
  name?: string,
  url: string
}