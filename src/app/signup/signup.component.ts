import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

interface User {
  userName: string;
  userEmail: string;
  userPwd: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  showLoader = false;

  userSignup: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.userSignup = this.fb.group({
      userName: new FormControl('', [Validators.required]),
      userEmail: new FormControl('', [Validators.required, Validators.email]),
      userPwd: new FormControl('', [Validators.required]),
      userPwdConfirm: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.showLoader = true;

    setTimeout(() => {
      this.showLoader = false;
    }, 2000);
  }

  loginPage() {
    this.router.navigate(['/login']);
  }

  signUp() {
    const fPwd = this.userSignup.get('userPwd')?.value;
    const sPwd = this.userSignup.get('userPwdConfirm')?.value;

    if (fPwd === sPwd) {
      const userdata: User = this.userSignup.value;

      this.http.post('http://localhost:3000/api/signup', userdata).subscribe(
        (response) => {
          console.log('This user data is successfully submitted.');
        },
        (error) => {
          console.error('Server error:', error);
        }
      );

      this.userSignup.reset();
    } else {
      console.log('Password should be matching.');
    }
  }
}
