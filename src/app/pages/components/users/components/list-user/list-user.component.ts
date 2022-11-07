import { Component, OnInit } from '@angular/core';
import UserService from '../../service/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
})
export class ListUserComponent implements OnInit {

  users = []

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUser().then(resp => {
      resp.toPromise().then((data: any[]) => {
        this.users = data
      })
    })
  }

}
