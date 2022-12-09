import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import UserService from '../../service/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
})
export class ListUserComponent implements OnInit {

  users = []

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getAllUser().then(resp => {
      resp.toPromise().then((data: any[]) => {
        this.users = data
      })
    })
  }

  gotoUserDetail(userId: string) {
    this.router.navigateByUrl(`users/${userId}`)
  }

}
