import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserAuth = false;

  constructor() {
    this.isUserAuth = (sessionStorage.getItem('isUserAuth') === 'true') ? true : false;
  }
}
