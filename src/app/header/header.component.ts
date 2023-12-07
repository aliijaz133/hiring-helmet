import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../service/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  logo = '.././../assets/image/asd 1.png';

  isLoggedIn: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthServiceService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  loginPage() {
    this.router.navigate(['/login']);
  }

  loginOrLogout() {
    if (this.isLoggedIn) {
      this.authService.logout();
      this.isLoggedIn = false;
    } else {
      this.router.navigate(['/login']);
    }
  }

  signupPage() {
    this.router.navigate(['/signup']);
  }
}
