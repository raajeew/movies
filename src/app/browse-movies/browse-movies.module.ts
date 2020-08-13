import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTreeModule} from '@angular/material/tree';
import { BrowseMoviesRoutingModule } from './browse-movies-routing.module';
import { BrowseMoviesComponent } from './browse-movies.component';


@NgModule({
  declarations: [BrowseMoviesComponent],
  imports: [
    CommonModule,
    BrowseMoviesRoutingModule,
    MatTreeModule
  ]
})
export class BrowseMoviesModule { }
