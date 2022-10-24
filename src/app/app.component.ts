import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  color  =  ''

  constructor() {
    console.log("App constructor dipanggil");
    
   }

  ngOnInit(): void {
    console.log("App ngOnInit dipanggil");
  }

}
