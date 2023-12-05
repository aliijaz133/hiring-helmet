import { Component, OnInit } from '@angular/core';

interface UserDetail {
  image: string;
  name: string;
  service: string;
  deliver_at: string;
  total: string;
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  showLoader:boolean = false;
  userDetail: UserDetail[] = [
    {
      image: '../../../assets/image/Ellipse 8.png',
      name: 'Tiffany Hardway',
      service: 'Interior Designing',
      deliver_at: 'June 10, 2022',
      total: '$15,0000',
    },
    {
      image: '../../../assets/image/Ellipse 8.png',
      name: 'Tiffany Hardway',
      service: 'Interior Designing',
      deliver_at: 'June 10, 2022',
      total: '$15,0000',
    },
    {
      image: '../../../assets/image/Ellipse 8.png',
      name: 'Tiffany Hardway',
      service: 'Interior Designing',
      deliver_at: 'June 10, 2022',
      total: '$15,0000',
    },
    {
      image: '../../../assets/image/Ellipse 8.png',
      name: 'Tiffany Hardway',
      service: 'Interior Designing',
      deliver_at: 'June 10, 2022',
      total: '$15,0000',
    },
    {
      image: '../../../assets/image/Ellipse 8.png',
      name: 'Tiffany Hardway',
      service: 'Interior Designing',
      deliver_at: 'June 10, 2022',
      total: '$15,0000',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.showLoader = true;

    setTimeout(()=>{
      this.showLoader = false;
    },1000)
  }
}
