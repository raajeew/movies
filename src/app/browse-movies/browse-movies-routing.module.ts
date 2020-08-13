import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowseMoviesComponent } from './browse-movies.component';

const routes: Routes = [{ path: '', component: BrowseMoviesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrowseMoviesRoutingModule { }
