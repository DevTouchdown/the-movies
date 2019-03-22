import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/services/auth.service';
import { environment } from 'src/environments/environment';
import { Credentials } from 'src/app/shared/models/credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  credentials: Credentials;
  wrongCredentials: boolean;

  constructor(
    private authService: AuthService,
    private router: Router) {}

  ngOnInit() {
    this.initializeCredentials();
  }

  login(): void {
    if (this.credentials.username === environment.credentials.username && this.credentials.password === environment.credentials.password) {
      this.authService.login();
      this.wrongCredentials = false;
      const redirect = this.authService.previousUrl ? this.authService.previousUrl : '';
      this.router.navigate([redirect]);
    } else {
      this.initializeCredentials();
      this.wrongCredentials = true;
    }
  }

  initializeCredentials(): void {
    this.credentials = {
      username: undefined,
      password: undefined
    };
  }
}
