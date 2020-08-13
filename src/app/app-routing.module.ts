import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [ 
 { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
 { path: 'movies-list', loadChildren: () => import('./movies-list/movies-list.module').then(m => m.MoviesListModule) },
 { path: 'movie-details', loadChildren: () => import('./movie-details/movie-details.module').then(m => m.MovieDetailsModule) }, 
 { path: 'browse-movies', loadChildren: () => import('./browse-movies/browse-movies.module').then(m => m.BrowseMoviesModule) },
 { path: '', pathMatch: 'full', redirectTo: 'home'},
 { path: '**', loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
