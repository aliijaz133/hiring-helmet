import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  showLoader = false;
  constructor() {}

  ngOnInit(): void {

    this.showLoader = true;

    setTimeout(()=> {
      this.showLoader = false;
    },1000)
  }
}
