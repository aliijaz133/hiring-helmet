import { Component, OnInit } from '@angular/core';

interface Services {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss'],
})
export class CreateOrderComponent implements OnInit {
  showLoader: boolean = false;
  services: Services[] = [
    {
      value: 'Solution Architecture Design',
      viewValue: 'Solution Architecture Design',
    },
    {
      value: 'Solution Architecture Design',
      viewValue: 'Solution Architecture Design',
    },
    {
      value: 'Solution Architecture Design',
      viewValue: 'Solution Architecture Design',
    },
  ];

  showDeliverybox?: boolean = false;

  showMileStone?: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.showLoader = true;

    setTimeout(() => {
      this.showLoader = false;
    },1000);
  }

  toogleDelivery() {
    this.showDeliverybox = !this.showDeliverybox;
  }

  toogleMileStone() {
    this.showMileStone = !this.showMileStone;
  }
}
