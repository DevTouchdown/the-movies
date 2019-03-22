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
      this.authService.isUserAuth = true;
      this.wrongCredentials = false;
      sessionStorage.setItem('isUserAuth', 'true');
      this.router.navigate(['']).then(() => {
        window.location.href = window.location.href;
      });
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
