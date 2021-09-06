import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = "Tutorial Angular 11 | Property Binding"
  paragraf = "Paragraf dari komponen class menggunakan property binding"
  dokumentasiLink = "https://angular.io/guide/property-binding"
  contentClass = "specialClass"
  isClassSpecial = true

  data = 'Data dari parent komponen dirubah'

  changeClassType(type) {
    if (type === 'special') {
      this.isClassSpecial = true
      this.contentClass = 'specialClass'
      this.title  = 'Special Class'
    } else {
      this.isClassSpecial = false
      this.contentClass = 'defaultClass'
      this.title  = 'Default Class'
    }
  }

  ngOnInit(): void {
  }

}
