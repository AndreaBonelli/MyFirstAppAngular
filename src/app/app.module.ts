import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {LayoutModule} from "./core/layout/layout.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {SuperheroesModule} from "./features/superheroes/superheroes.module";

// Indica che questa classe è un modulo (decoratore)
@NgModule({
  // array di componenti che questo modulo dovrà gestire
  declarations: [
    AppComponent
  ],
  // array di moduli che questo modulo dovrà importarsi
  imports: [
    BrowserModule,
    LayoutModule,
    BrowserAnimationsModule,
    MatCardModule,
    SuperheroesModule
  ],
  providers: [],
  // proprietà che definisce il componente che dovrà carcare per primo
  bootstrap: [AppComponent]
})
// un modulo è una classe
export class AppModule { }
