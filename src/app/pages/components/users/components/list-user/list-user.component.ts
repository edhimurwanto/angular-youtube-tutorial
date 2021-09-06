import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  users = [
    {
      id: "01",
      firstName: "Edi",
      lastName: "Murwanto",
      job: "-",
      avatar: "-"
    },
    {
      id: "02",
      firstName: "Jhon",
      lastName: "Tor",
      job: "-",
      avatar: "-"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
