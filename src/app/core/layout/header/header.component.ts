import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isUserAuth: boolean;

  constructor(
    private authService: AuthService) { }

  ngOnInit() {
    this.isUserAuth = this.authService.isUserAuth;
  }

  closeSession(): void {
    this.authService.isUserAuth = false;
    sessionStorage.clear();
    window.location.href = window.location.href;
  }
}
