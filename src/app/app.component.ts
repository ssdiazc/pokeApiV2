import { Component } from '@angular/core';
import { GetPokemonListStoreServiceService } from './core/store/pokemoncatalog/reducers/get-pokemon-list/get-pokemon-list.store-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pokeApiV2';
  validationResult = '';
  customOffset = '';
  customLimit = '';

  constructor(
    private getPokemonListStoreService: GetPokemonListStoreServiceService
  ) {}

  getPokemonCustomList() {
    if (Number(this.customOffset) >= 0 && Number(this.customLimit) > 0) {
      this.getPokemonListStoreService.fetchPokemonList(
        this.customOffset,
        this.customLimit
      );
      this.validationResult = 'Se lanzó la consulta satisfactoriamente';
    } else {
      this.validationResult = 'Valores incorrectos';
    }
  }
}
