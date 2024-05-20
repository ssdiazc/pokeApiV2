export interface GetPokemonListRequestTemplate {
  offset: string;
  limit: string;
}
export interface GetPokemonListResponseTemplate {
  count?: number;
  next?: string;
  previous?: string;
  results?: PokemonList[];
  error?: ErrorGenericAction;
}
export interface PokemonList {
  name: string;
  url: string;
}

export interface ErrorGenericAction {
  status: string;
  message: string;
}
