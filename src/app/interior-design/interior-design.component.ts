import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interior-design',
  templateUrl: './interior-design.component.html',
  styleUrls: ['./interior-design.component.scss']
})
export class InteriorDesignComponent implements OnInit {

  showLoader = false;
  constructor() { }

  ngOnInit(): void {

    this.showLoader = true;

    setTimeout(()=> {
      this.showLoader  =false;
    },1000)
  }

}
