import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaUnoComponent } from './components/prueba-uno/prueba-uno.component';
import { PruebaDosComponent } from './components/prueba-dos/prueba-dos.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaUnoComponent,
    PruebaDosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
