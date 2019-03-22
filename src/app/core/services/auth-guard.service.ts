import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router) {}

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
    // Store the attempted URL for redirecting
    this.authService.previousUrl = originUrl;

    // Navigate to the login page with extras
    this.router.navigate(['login']);
    return false;
    }
  }
}
