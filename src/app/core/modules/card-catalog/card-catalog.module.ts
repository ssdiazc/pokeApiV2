import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PokemonDetalsEffects } from '../../store/pokemoncatalog/reducers/get-pokemon-details/get-pokemon-details.effect';
import { GetPokemonListEffects } from '../../store/pokemoncatalog/reducers/get-pokemon-list/get-pokemon-list.effects';
import { CardCatalogRoutingModule } from './card-catalog-routing.module';
import { PokeCatalogComponent } from './components/poke-catalog/poke-catalog.component';
import { reducers } from './pokemon-catalog-store.module';

@NgModule({
  declarations: [PokeCatalogComponent],
  imports: [
    CommonModule,
    CardCatalogRoutingModule,
    HttpClientModule,
    StoreModule.forFeature('cardcatalogmodule', reducers),
    EffectsModule.forFeature([GetPokemonListEffects, PokemonDetalsEffects]),
  ],
})
export class CardCatalogModule {}
