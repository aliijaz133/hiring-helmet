import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DragimageComponent } from '../dragimage/dragimage.component';

@Component({
  selector: 'app-service-order',
  templateUrl: './service-order.component.html',
  styleUrls: ['./service-order.component.scss'],
})
export class ServiceOrderComponent implements OnInit {
  timeNow?: number;

  constructor(private dialog: MatDialog) {
    setInterval(() => {
      this.timeNow = Date.now();
    }, 1);
  }

  ngOnInit(): void {}

  dragImage() {
    this.dialog.open(DragimageComponent);
  }
}
