import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const originUrl: string = state.url;
    return this.checkLogin(originUrl);
  }

  checkLogin(originUrl: string): boolean {
    let isUserLoggedIn: boolean;

    this.authService.isUserLoggedIn().subscribe(result => {
      isUserLoggedIn = result;
    });

    if (isUserLoggedIn) {
      return true;
    } else {
      this.authService.previousUrl = originUrl;
      this.router.navigate(['login']);
      return false;
    }
  }
}
