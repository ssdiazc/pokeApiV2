import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GetPokemonListModel } from 'src/app/dependencies/models/pokemon-list-model';
import { selectGetPokemonList } from '../../pokemon-catalog-store-module';
import { fetchGetPokemonListAPI } from './get-pokemon-list.action';

@Injectable({
  providedIn: 'root',
})
export class GetPokemonListStoreServiceService {
  constructor(private storeService: Store) {}

  fetchPokemonList(offset: string, limit: string) {
    this.storeService.dispatch(
      fetchGetPokemonListAPI({ pokemonListRq: { offset, limit } })
    );
  }

  getPokemonList(): Observable<GetPokemonListModel | undefined> {
    return this.storeService.pipe(select(selectGetPokemonList));
  }
}
