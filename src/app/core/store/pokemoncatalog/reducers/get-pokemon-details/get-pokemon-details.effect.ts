import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { PokemonDetailsModel } from 'src/app/dependencies/models/pokemon-details-model';
import { GetPokemonListService } from 'src/app/dependencies/services/get-pokemon-list/get-pokemon-list.service';
import {
  fetchPokemonDetailsAPI,
  fetchPokemonDetailsAPIError,
  fetchPokemonDetailsAPISuccess,
} from './get-pokemon-details.action';

@Injectable()
export class PokemonDetalsEffects {
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
      ofType(fetchPokemonDetailsAPI),
      switchMap((action) =>
        this.getPokemonListService
          .getPokemonDetails(action.pokemonDetailsRq.pokemonId)
          .pipe(
            map((pokemonDetails) =>
              fetchPokemonDetailsAPISuccess({
                pokemonDetails: new PokemonDetailsModel(pokemonDetails),
              })
            ),
            catchError((err) =>
              of(fetchPokemonDetailsAPIError({ error: this.errorTemplate }))
            )
          )
      )
    )
  );
}
