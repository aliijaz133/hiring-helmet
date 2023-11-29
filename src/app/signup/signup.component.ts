import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  showLoader = false;

  constructor() {}

  ngOnInit(): void {

    this.showLoader = true;

    setTimeout(()=> {
      this.showLoader = false;
    },2000);
  }
}
