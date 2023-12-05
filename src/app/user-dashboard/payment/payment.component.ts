import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreditCardComponent } from '../credit-card/credit-card.component';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  showLoader: boolean = false;
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.showLoader = true;

    setTimeout(() => {
      this.showLoader = false;
    }, 1000);
  }

  openDialog() {
    this.dialog.open(CreditCardComponent);
  }
}
