import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = ''
  counter = 0

  greeting(){
    this.title = 'Welcome to Tutorial Angular 11'
  }

  ngOnInit(): void {
  }

}
