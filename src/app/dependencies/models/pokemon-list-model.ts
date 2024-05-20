import {
  ErrorGenericAction,
  GetPokemonListResponseTemplate,
  PokemonList,
} from '../templates/get-pokemon-list-template';

export class GetPokemonListModel {
  private _count?: number;
  private _next?: string;
  private _previous?: string;
  private _results?: PokemonList[];
  private _error?: ErrorGenericAction;
  constructor(data: GetPokemonListResponseTemplate | undefined) {
    this._count = data?.count;
    this._next = data?.next;
    this._previous = data?.previous;
    this._results = data?.results;
    this._error = data?.error;
  }

  get results() {
    return this._results;
  }

  findPokemon(pokemonName: string) {
    return this._results?.find((pokemon) => pokemonName === pokemon.name);
  }

  findPokemonIdx(pokemonName: string) {
    return this.findPokemon(pokemonName)
      ?.url?.split('/')
      .find((el) => Number(el) > 0);
  }
}
