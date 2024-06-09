import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebaDosComponent } from './components/prueba-dos/prueba-dos.component';
import { PruebaUnoComponent } from './components/prueba-uno/prueba-uno.component';

const routes: Routes = [
  { path: 'prueba-uno', component: PruebaUnoComponent },
  { path: 'prueba-dos', component: PruebaDosComponent },
  { path: '**', redirectTo: 'prueba-uno' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
