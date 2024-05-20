import { createAction, props } from '@ngrx/store';
import { GetPokemonListModel } from 'src/app/dependencies/models/pokemon-list-model';
import {
  ErrorGenericAction,
  GetPokemonListRequestTemplate,
} from 'src/app/dependencies/templates/get-pokemon-list-template';

export const fetchGetPokemonListAPI = createAction(
  'GET_POKEMON_LIST',
  props<{ pokemonListRq: GetPokemonListRequestTemplate }>()
);

export const fetchGetPokemonListAPISuccess = createAction(
  'GET_POKEMON_LIST_SUCCESS',
  props<{ pokemonList: GetPokemonListModel }>()
);

export const fetchGetPokemonListAPIError = createAction(
  'GET_POKEMON_LIST_ERROR',
  props<{ error: ErrorGenericAction }>()
);
