import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../service/auth-service.service';

@Component({
  selector: 'app-interior-design',
  templateUrl: './interior-design.component.html',
  styleUrls: ['./interior-design.component.scss'],
})
export class InteriorDesignComponent implements OnInit {
  showLoader = false;
  constructor(
    private router: Router,
    private authService: AuthServiceService
  ) {}

  ngOnInit(): void {
    this.showLoader = true;

    setTimeout(() => {
      this.showLoader = false;
    }, 1000);
  }

  loginPage() {
    const logedIn = this.authService.isLoggedIn();
    if (!logedIn) {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/user-dashboard/orders']);
    }
  }
}
