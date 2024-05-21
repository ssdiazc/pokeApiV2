import { Component, OnInit } from '@angular/core';
import { PokemonDetailsStoreService } from 'src/app/core/store/pokemoncatalog/reducers/get-pokemon-details/get-pokemon-details-store.service';
import { GetPokemonListStoreServiceService } from 'src/app/core/store/pokemoncatalog/reducers/get-pokemon-list/get-pokemon-list.store-service.service';
import { PokemonDetailsModel } from 'src/app/dependencies/models/pokemon-details-model';
import { GetPokemonListModel } from 'src/app/dependencies/models/pokemon-list-model';

@Component({
  selector: 'app-poke-catalog',
  templateUrl: './poke-catalog.component.html',
  styleUrls: ['./poke-catalog.component.scss'],
})
export class PokeCatalogComponent implements OnInit {
  constructor(
    private getPokemonListStoreService: GetPokemonListStoreServiceService,
    private pokemonDetailsStoreService: PokemonDetailsStoreService
  ) {}
  pokemonList: GetPokemonListModel | undefined;
  pokemonDetails: PokemonDetailsModel | undefined;
  offsetValue = 0;
  pageLimit = 20;

  ngOnInit(): void {
    this.getPokemonListStoreService.getPokemonList().subscribe((res) => {
      if (!!res?.results) {
        this.pokemonList = res;
      }
    });

    this.pokemonDetailsStoreService.getPokemonDetails().subscribe((res) => {
      if (!!res?.abilities) {
        this.pokemonDetails = res;
        console.log(this.pokemonDetails);
      }
    });

    this.getPokemonListStoreService.fetchPokemonList(
      `${this.offsetValue}`,
      `${this.pageLimit}`
    );
  }

  getPokemonDetails(pokemonName: string | undefined) {
    const pokemonIdx = this.pokemonList?.findPokemonIdx(pokemonName || '');
    console.log({ pokemonIdx });
    this.pokemonDetailsStoreService.fetchPokemonDetails(pokemonIdx || '');
  }

  nextButtonClick() {
    this.offsetValue += this.pageLimit + 1;
    this.getPokemonListStoreService.fetchPokemonList(
      `${this.offsetValue}`,
      `${this.pageLimit}`
    );
  }

  prevButtonClick() {
    this.offsetValue = this.offsetValue - this.pageLimit - 1;
    if (this.offsetValue < 0) {
      this.offsetValue = 0;
    } else {
      this.getPokemonListStoreService.fetchPokemonList(
        `${this.offsetValue}`,
        `${this.pageLimit}`
      );
    }
  }

  startButtonClick() {
    this.offsetValue = 0;
    this.getPokemonListStoreService.fetchPokemonList(
      `${this.offsetValue}`,
      `${this.pageLimit}`
    );
  }
}
