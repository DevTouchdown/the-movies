import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
  previousUrl: string;

  constructor() { }

  private hasToken(): boolean {
    return !!sessionStorage.getItem('token');
  }

  login(): void {
    sessionStorage.setItem('token', 'JWT');
    this.isUserLoggedInSubject.next(true);
  }

  logout(): void {
    sessionStorage.removeItem('token');
    this.isUserLoggedInSubject.next(false);
  }

  isUserLoggedIn(): Observable<boolean> {
    return this.isUserLoggedInSubject.asObservable();
  }
}
