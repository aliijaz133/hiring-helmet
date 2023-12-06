import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DragimageComponent } from '../dragimage/dragimage.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-order',
  templateUrl: './service-order.component.html',
  styleUrls: ['./service-order.component.scss'],
})
export class ServiceOrderComponent implements OnInit {
  showLoader: boolean = false;
  timeNow?: number;

  text: string | undefined;

  constructor(private dialog: MatDialog, private router: Router) {
    setInterval(() => {
      this.timeNow = Date.now();
    }, 1);

    this.showLoader = true;

    setTimeout(() => {
      this.showLoader = false;
    }, 1000);
  }

  ngOnInit(): void {}

  dragImage() {
    this.dialog.open(DragimageComponent);
  }

  backtoOrder() {
    this.router.navigate(['/user-dashboard/orders']);
  }
}
