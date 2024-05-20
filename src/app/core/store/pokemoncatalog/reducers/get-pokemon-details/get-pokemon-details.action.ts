import { createAction, props } from '@ngrx/store';
import { PokemonDetailsModel } from 'src/app/dependencies/models/pokemon-details-model';
import { ErrorGenericAction } from 'src/app/dependencies/templates/get-pokemon-list-template';
import { PokemonDetailsRequestTemplate } from 'src/app/dependencies/templates/pokemon-details-templates';

export const fetchPokemonDetailsAPI = createAction(
  'POKEMON_DETAILS',
  props<{ pokemonDetailsRq: PokemonDetailsRequestTemplate }>()
);

export const fetchPokemonDetailsAPISuccess = createAction(
  'POKEMON_DETAILS_SUCCESS',
  props<{ pokemonDetails: PokemonDetailsModel }>()
);

export const fetchPokemonDetailsAPIError = createAction(
  'POKEMON_DETAILS_ERROR',
  props<{ error: ErrorGenericAction }>()
);
