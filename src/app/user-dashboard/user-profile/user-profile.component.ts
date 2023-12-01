import { Component, OnInit } from '@angular/core';

interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  genders: Gender[] = [
    { value: 'male', viewValue: 'Male' },
    { value: 'female', viewValue: 'Female' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
