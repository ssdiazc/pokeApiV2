import { Component, OnInit } from '@angular/core';
import { GetIpInformatioStoreServiceService } from './core/store/api-my-ip/reducers/get-ip-information/get-ip-information.store-service.service';
import { GetPokemonListStoreServiceService } from './core/store/pokemoncatalog/reducers/get-pokemon-list/get-pokemon-list.store-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'pokeApiV2';
  validationResult = '';
  customOffset = '';
  customLimit = '';

  constructor(
    private getPokemonListStoreService: GetPokemonListStoreServiceService,
    private getIpInformationByType: GetIpInformatioStoreServiceService
  ) {}

  ngOnInit(): void {
    this.getIpInformationByType.getPokemonList().subscribe((response) => {
      console.log({ response });
    });
    this.getIpInformationByType.fetchGetIpInformationByType('json');
  }

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
