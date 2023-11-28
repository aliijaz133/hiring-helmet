import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  logo = '.././../assets/image/asd 1.png';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  loginPage() {
    this.router.navigate(['/login']);
  }

  signupPage() {
    this.router.navigate(['/signup']);
  }
}
