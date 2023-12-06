import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  showLoader = false;

  userLogin: FormGroup;

  user = {
    userEmail: '',
    userPwd: '',
  };

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.userLogin = this.fb.group({
      userEmail: new FormControl('', [Validators.required]),
      userPwd: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  ngOnInit(): void {
    this.showLoader = true;

    setTimeout(() => {
      this.showLoader = false;
    }, 2000);
  }

  signupPage() {
    this.router.navigate(['/signup']);
  }

  loggedIn() {
    this.user.userEmail = this.userLogin.value.userEmail;
    this.user.userPwd = this.userLogin.value.userPwd;

    // console.log('User login:', this.user);

    this.http.post('http://localhost:3000/api/login', this.user).subscribe(
      (response: any) => {
        console.log('Server response:', response);

        localStorage.setItem('userId', response._id);

        this.router.navigate(['/user-dashboard/home'], {
          queryParams: { userEmail: this.user.userEmail },
        });
      },
      (error) => {
        console.error('Server error:', error);

        if (error.status === 401) {
          // this.toastr.error('Invalid email or password');
          console.log('Invalid email or password');
        } else {
          // this.toastr.error('Login failed. Please try again.');
          console.log('Invalid email or password');
        }
      }
    );
  }
}
