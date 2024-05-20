import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PokemonDetailsModel } from 'src/app/dependencies/models/pokemon-details-model';
import { selectPokemonDetails } from '../../pokemon-catalog-store-module';
import { fetchPokemonDetailsAPI } from './get-pokemon-details.action';

@Injectable({
  providedIn: 'root',
})
export class PokemonDetailsStoreService {
  constructor(private storeService: Store) {}

  fetchPokemonDetails(pokemonId: string) {
    this.storeService.dispatch(
      fetchPokemonDetailsAPI({ pokemonDetailsRq: { pokemonId } })
    );
  }

  getPokemonDetails(): Observable<PokemonDetailsModel | undefined> {
    return this.storeService.pipe(select(selectPokemonDetails));
  }
}
