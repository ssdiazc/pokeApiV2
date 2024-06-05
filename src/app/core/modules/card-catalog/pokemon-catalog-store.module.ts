import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PokemonDetailsModel } from 'src/app/dependencies/models/pokemon-details-model';
import { GetPokemonListModel } from 'src/app/dependencies/models/pokemon-list-model';
import { getPokemonDetailsReducer } from '../../store/pokemoncatalog/reducers/get-pokemon-details/get-pokemon-details.reducer';
import { getPokemonListReducer } from '../../store/pokemoncatalog/reducers/get-pokemon-list/get-pokemon-list.reducer';

export const initialState: Readonly<PokemonCatalogReducerTemplate> = {};

export interface PokemonCatalogReducerTemplate {
  pokemonListData?: GetPokemonListModel;
  pokemonDetailsData?: PokemonDetailsModel;
}

export const selecCardCatalog =
  createFeatureSelector<PokemonCatalogReducerTemplate>('cardcatalogmodule');

export const selectGetPokemonList = createSelector(
  selecCardCatalog,
  (state: PokemonCatalogReducerTemplate) => state.pokemonListData
);

export const selectPokemonDetails = createSelector(
  selecCardCatalog,
  (state: PokemonCatalogReducerTemplate) => state.pokemonDetailsData
);

export const reducers = {
  pokemonListData: getPokemonListReducer,
  pokemonDetailsData: getPokemonDetailsReducer,
};
