import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn: Observable<boolean>;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isUserLoggedIn = this.authService.isUserLoggedIn();
  }

  closeSession(): void {
    this.authService.logout();
  }
}
