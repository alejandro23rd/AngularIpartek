import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms’;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ArraysComponent } from './paginas/arrays/arrays.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PruebasComponent } from './component/pruebas/pruebas.component';
import { PokemonRestComponent } from './paginas/pokemon-rest/pokemon-rest.component';
import { FormStyle } from '@angular/common';
import { EstilosComponent } from './paginas/estilos/estilos.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ArraysComponent,
    NavbarComponent,
    PruebasComponent,
    PokemonRestComponent,
    EstilosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, //modulo para llamar por HTTP
    AppRoutingModule,
    FormsModule, //modulo para usar banana in a box y formularios

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
