import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  title = 'Title hero component'

  name = "Edi Murwanto"
  hobbies = ["Sleeping", "Coding", "Swimming"]
  number = 0

  user = {
    name: this.name,
    age: 20,
    address: "Jakarta"
  }

  getName(){
    return this.name;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
