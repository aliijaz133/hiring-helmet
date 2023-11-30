import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  showLoader = false;

  constructor() {}

  ngOnInit(): void {

    this.showLoader = true;

    setTimeout(()=> {
      this.showLoader = false;
    },1000)
  }
}
