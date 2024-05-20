import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { GetPokemonListModel } from 'src/app/dependencies/models/pokemon-list-model';
import { GetPokemonListService } from 'src/app/dependencies/services/get-pokemon-list/get-pokemon-list.service';
import {
  fetchGetPokemonListAPI,
  fetchGetPokemonListAPIError,
  fetchGetPokemonListAPISuccess,
} from './get-pokemon-list.action';

@Injectable()
export class GetPokemonListEffects {
  errorTemplate = {
    status: 'Error',
    message: 'There was an error',
  };
  constructor(
    private actions$: Actions,
    private getPokemonListService: GetPokemonListService
  ) {}

  pokemonList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchGetPokemonListAPI),
      switchMap((action) =>
        this.getPokemonListService
          .getPokemonList(
            action.pokemonListRq.offset,
            action.pokemonListRq.limit
          )
          .pipe(
            map((pokemonList) =>
              // fetchGetPokemonListAPISuccess({ pokemonList })
              fetchGetPokemonListAPISuccess({
                pokemonList: new GetPokemonListModel(pokemonList),
              })
            ),
            catchError((err) =>
              of(fetchGetPokemonListAPIError({ error: this.errorTemplate }))
            )
          )
      )
    )
  );
}
