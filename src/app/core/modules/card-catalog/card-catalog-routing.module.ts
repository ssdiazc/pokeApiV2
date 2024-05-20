import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeCatalogComponent } from './components/poke-catalog/poke-catalog.component';

const routes: Routes = [
  {
    path: '',
    component: PokeCatalogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardCatalogRoutingModule {}
