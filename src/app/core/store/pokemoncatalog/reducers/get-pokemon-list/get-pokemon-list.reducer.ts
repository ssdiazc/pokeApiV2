import { createReducer, on } from '@ngrx/store';
// import { initialState } from '../../configs/pokemon-catalog.state';
import { GetPokemonListResponseTemplate } from 'src/app/dependencies/templates/get-pokemon-list-template';
import {
  fetchGetPokemonListAPIError,
  fetchGetPokemonListAPISuccess,
} from './get-pokemon-list.action';

export const initialState: Readonly<GetPokemonListResponseTemplate> = {};

export const getPokemonListReducer = createReducer(
  initialState,
  on(fetchGetPokemonListAPISuccess, (state, { pokemonList }) => {
    return pokemonList;
  }),
  on(fetchGetPokemonListAPIError, (state, { error }) => {
    return { error: error };
  })
);
