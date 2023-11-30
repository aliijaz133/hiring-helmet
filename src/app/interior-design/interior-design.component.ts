import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-interior-design',
  templateUrl: './interior-design.component.html',
  styleUrls: ['./interior-design.component.scss'],
})
export class InteriorDesignComponent implements OnInit {
  showLoader = false;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.showLoader = true;

    setTimeout(() => {
      this.showLoader = false;
    }, 1000);
  }

  loginPage() {
    this.router.navigate(['/login']);
  }
}
