import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  users = [];

  constructor(private readonly userService: UserService) {

  }

  ngOnInit(): void {
    this.fetchUser()
  }

  fetchUser() {
    this.userService.getAll().toPromise().then((resp: any) => {

      this.users = resp.users

    })
  }

}
