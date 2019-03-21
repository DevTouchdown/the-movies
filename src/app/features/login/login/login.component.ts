import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router) {}

  ngOnInit() {}

  login(): void {
    if (this.username === 'movies' && this.password === 'movies') {
      this.authService.isUserAuth = true;
      this.storageService.addToSession('isUserAuth', 'true');
      this.router.navigate(['']).then(() => {
        window.location.href = window.location.href;
      });
    } else {
      this.username = undefined;
      this.password = undefined;
    }
  }
}
