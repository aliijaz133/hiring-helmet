import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  showLoader: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.showLoader = true;

    setTimeout(()=>{
      this.showLoader = false;
    },1000)
  }
}
