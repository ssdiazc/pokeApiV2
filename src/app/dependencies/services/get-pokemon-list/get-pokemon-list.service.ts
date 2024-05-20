import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetPokemonListResponseTemplate } from '../../templates/get-pokemon-list-template';
import { GetEnvConfigService } from '../get-env-config/get-env-config.service';

@Injectable({
  providedIn: 'root',
})
export class GetPokemonListService {
  constructor(
    private httpRequest: HttpClient,
    private envConfigs: GetEnvConfigService
  ) {}

  host = this.envConfigs.getConfiguration('HOST_POKE_API');
  PokemonOperation = this.envConfigs.getConfiguration('OPERATION_GET_POKEMON');

  getPokemonList(
    offset: string,
    limit: string
  ): Observable<GetPokemonListResponseTemplate> {
    return this.httpRequest.get(
      `${this.host}${this.PokemonOperation}?offset=${offset}&limit=${limit}`
    );
  }

  getPokemonDetails(pokemonIndex: string) {
    return this.httpRequest.get(
      `${this.host}${this.PokemonOperation}/${pokemonIndex}`
    );
  }
}
