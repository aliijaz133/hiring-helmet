import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  showLoader = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.showLoader = true;

    setTimeout(() => {
      this.showLoader = false;
    }, 2000);
  }

  signupPage() {
    this.router.navigate(['/signup']);
  }

  loggedIn(){
    this.router.navigate(['/user-dashboard/profile'])
  }
}
