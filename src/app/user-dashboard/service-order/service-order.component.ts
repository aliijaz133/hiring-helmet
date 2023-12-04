import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-order',
  templateUrl: './service-order.component.html',
  styleUrls: ['./service-order.component.scss'],
})
export class ServiceOrderComponent implements OnInit {
  timeNow?: number;

  constructor() {
    setInterval(() => {
      this.timeNow = Date.now();
    }, 1);
  }

  ngOnInit(): void {}
}
