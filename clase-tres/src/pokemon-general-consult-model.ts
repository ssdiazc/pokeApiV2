// import {Result, previousCustomType, PokemonGeneralConsult} from './data.interface';
import * as Data from './data.interface';

export class PokemonGeneralConsultModel {
  private _count: number;
  private _next: string;
  private _previous: Data.previousCustomType;
  private _results: Data.Result[];

  constructor (data: Data.PokemonGeneralConsult) {
    this._count = data.count;
    this._next = data.next;
    this._previous = data.previous;
    this._results = data.results;
  }

  get count() {
    return this._count;
  }

  get next() {
    return this._next;
  }

  get previous() {
    return this._previous;
  }

  get results () {
    return this._results;
  }

  getPokemonInfoByName (pokemonName: string) {
    const result = this._results?.find(pokemonInfo => pokemonInfo?.name === pokemonName);
    return result;
  }

}