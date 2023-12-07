import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../service/auth-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  hidetext: boolean = false;

  constructor(private authService: AuthServiceService) {}

  ngOnInit(): void {
    this.hidetext = this.authService.isLoggedIn();
  }
}
