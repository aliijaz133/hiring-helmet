import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  showLoader = false;

  userSignup: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
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
    console.log('User Data: ', this.userSignup.value);

    this.userSignup.reset();
  }
}
