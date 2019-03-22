import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './core/services/auth-guard.service';

const routes: Routes = [{
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full'
  }, {
    path: 'login',
    loadChildren: 'src/app/features/login/login.module#LoginModule'
  }, {
    path: 'movies',
    loadChildren: 'src/app/features/movies/movies.module#MoviesModule'
  }, {
    path: 'favorite-movies',
    loadChildren: 'src/app/features/favorite-movies/favorite-movies.module#FavoriteMoviesModule',
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
