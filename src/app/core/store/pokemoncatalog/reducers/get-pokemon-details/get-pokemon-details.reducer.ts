import { createReducer, on } from '@ngrx/store';
import { PokemonDetailsTemplate } from 'src/app/dependencies/templates/pokemon-details-templates';
import {
  fetchPokemonDetailsAPIError,
  fetchPokemonDetailsAPISuccess,
} from './get-pokemon-details.action';

export const initialState: Readonly<PokemonDetailsTemplate> = {};

export const getPokemonDetailsReducer = createReducer(
  initialState,
  on(fetchPokemonDetailsAPISuccess, (state, { pokemonDetails }) => {
    return pokemonDetails;
  }),
  on(fetchPokemonDetailsAPIError, (state, { error }) => {
    return { error: error };
  })
);
