import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AuthService } from './services/auth.service';
import { MoviesService } from './services/movies.service';
import { FavoriteService } from './services/favorite.service';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
  return {
    ngModule: CoreModule,
    providers: [
      MoviesService,
      FavoriteService,
      AuthService,
      AuthGuardService
    ]
  };
}}
