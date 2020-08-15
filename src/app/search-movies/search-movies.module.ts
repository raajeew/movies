import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchMoviesRoutingModule } from './search-movies-routing.module';
import { SearchMoviesComponent } from './search-movies.component';
import {FormsModule } from '@angular/forms';


@NgModule({
  declarations: [SearchMoviesComponent],
  imports: [
    CommonModule,
    SearchMoviesRoutingModule,
    FormsModule
  ]
})
export class SearchMoviesModule { }
