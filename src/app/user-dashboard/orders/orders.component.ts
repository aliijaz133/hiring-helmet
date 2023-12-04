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
  asyncTabs: Observable<ExampleTab[]>;

  activeTabIndex: number = 0; // Set the default active tab index

  setActiveTab(index: number): void {
    this.activeTabIndex = index;
  }

  constructor() {
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          { label: 'First', content: 'Content 1' },
          { label: 'Second', content: 'Content 2' },
          { label: 'Third', content: 'Content 3' },
          { label: 'Forth', content: 'Content 4' },
        ]);
      }, 1000);
    });
  }

  ngOnInit(): void {}

  trackTab(index: number, item: ExampleTab): string {
    // Return a unique identifier for the item
    return item.label;
  }
}
