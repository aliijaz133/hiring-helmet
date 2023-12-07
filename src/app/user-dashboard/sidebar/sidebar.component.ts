import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  userName: string | null = null;

  constructor(
    private router: Router,
    private authService: AuthServiceService
  ) {}

  ngOnInit(): void {
    this.userName = this.authService.getLoggedInUserName() || null;
  }
}
