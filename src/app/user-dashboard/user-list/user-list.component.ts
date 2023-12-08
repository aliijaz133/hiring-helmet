import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  userList: any[] = [];

  showLoader = false;

  private url = 'http://localhost:3000/api/user-dashboard/user-list';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUsersdata();

    this.showLoader = true;

    setTimeout(() => {
      this.showLoader = false;
    }, 2000);
  }

  getUsersdata(): void {
    // const userData = this.userList;

    this.http.get(this.url).subscribe(
      (response: any) => {
        this.userList = response;

        console.log('User List: ', this.userList);
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
  }
}
