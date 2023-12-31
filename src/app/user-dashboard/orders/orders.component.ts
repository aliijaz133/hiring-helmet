import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { AsyncPipe } from '@angular/common';

export interface ExampleTab {
  label: string;
  content: string;
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  showLoader: boolean = false;
  asyncTabs: Observable<ExampleTab[]>;

  activeTabIndex: number = 0; // Set the default active tab index

  setActiveTab(index: number): void {
    this.activeTabIndex = index;
  }

  constructor() {
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          { label: 'One Time Payment', content: 'Content 1' },
          { label: 'Mile Stone Wise Order', content: 'Content 2' },
          { label: 'Subscribed Order', content: 'Content 3' },
          { label: 'Recurring Order', content: 'Content 4' },
        ]);
      }, 1000);
    });
  }

  ngOnInit(): void {
    this.showLoader = true;

    setTimeout(() => {
      this.showLoader = false;
    },1000);
  }

  trackTab(index: number, item: ExampleTab): string {
    // Return a unique identifier for the item
    return item.label;
  }
}
