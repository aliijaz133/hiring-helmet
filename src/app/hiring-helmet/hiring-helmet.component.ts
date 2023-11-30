import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Router } from '@angular/router';


export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-hiring-helmet',
  templateUrl: './hiring-helmet.component.html',
  styleUrls: ['./hiring-helmet.component.scss'],
})
export class HiringHelmetComponent implements OnInit {
  addOnBlur = true;

  showLoader = false;

  inputVisible: boolean = false;

  showInput() {
    this.inputVisible = true;
  }

  hideInput() {
    this.inputVisible = false;
  }
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  fruits: Fruit[] = [
    { name: 'Interior' },
    { name: 'Engineering' },
    { name: '3D Max' },
    { name: 'Blender' },
  ];

  constructor(
    private announcer: LiveAnnouncer,
    private el: ElementRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.showLoader = true;

    setTimeout(() => {
      this.showLoader = false;
    },1000);
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push({ name: value });
    }

    // Clear the input value
    if (event.input) {
      event.input.value = '';
    }

    this.hideInput();
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);

      this.announcer.announce(`Removed ${fruit.name}`);
    }
  }

  edit(fruit: Fruit, event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Remove fruit if it no longer has a name
    if (!value) {
      this.remove(fruit);
      return;
    }

    // Edit existing fruit
    const index = this.fruits.indexOf(fruit);
    if (index >= 0) {
      this.fruits[index].name = value;
    }
  }

  categories() {
    this.router.navigate(['/all-categories']);
  }
}
