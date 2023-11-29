import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-why-us',
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.scss'],
})
export class WhyUsComponent implements OnInit {
  leaf = '../../assets/image/leaf-eco.png';
  eco = '../../assets/image/eco-friendly.png';
  hours_24 = '../../assets/image/24-hour-7.png';

  constructor() {}

  ngOnInit(): void {}
}
