import { Component, OnInit } from '@angular/core';

interface PaymentDetail {
  image: string;
  total: string;
  buyer: string;
  due_in: string;
  status: string;
  service_Name: string;
}

@Component({
  selector: 'app-onetimepayment',
  templateUrl: './onetimepayment.component.html',
  styleUrls: ['./onetimepayment.component.scss'],
})
export class OnetimepaymentComponent implements OnInit {

  paymentDetail: PaymentDetail[] = [
    {
      image: '../../../assets/image/image 3.png',
      service_Name: 'Interior Designing',
      total: '15000',
      buyer: 'Tiffany Hardway',
      due_in: '3d, 10min',
      status: 'In Progress',
    },
    {
      image: '../../../assets/image/image 3.png',
      service_Name: 'Interior Designing',
      total: '15000',
      buyer: 'Tiffany Hardway',
      due_in: '3d, 10min',
      status: 'In Progress',
    },
    {
      image: '../../../assets/image/image 3.png',
      service_Name: 'Interior Designing',
      total: '15000',
      buyer: 'Tiffany Hardway',
      due_in: '3d, 10min',
      status: 'In Progress',
    },
    {
      image: '../../../assets/image/image 3.png',
      service_Name: 'Interior Designing',
      total: '15000',
      buyer: 'Tiffany Hardway',
      due_in: '3d, 10min',
      status: 'In Progress',
    },
    {
      image: '../../../assets/image/image 3.png',
      service_Name: 'Interior Designing',
      total: '15000',
      buyer: 'Tiffany Hardway',
      due_in: '3d, 10min',
      status: 'In Progress',
    },
    {
      image: '../../../assets/image/image 3.png',
      service_Name: 'Interior Designing',
      total: '15000',
      buyer: 'Tiffany Hardway',
      due_in: '3d, 10min',
      status: 'In Revision',
    },
    {
      image: '../../../assets/image/image 3.png',
      service_Name: 'Interior Designing',
      total: '15000',
      buyer: 'Tiffany Hardway',
      due_in: '3d, 10min',
      status: 'Delivered',
    },
    {
      image: '../../../assets/image/image 3.png',
      service_Name: 'Interior Designing',
      total: '15000',
      buyer: 'Tiffany Hardway',
      due_in: '3d, 10min',
      status: 'Delivered',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
