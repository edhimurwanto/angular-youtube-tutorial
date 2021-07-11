import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {

  counter = 0
  interval;

  constructor() {
    console.log("Hero constructor dipanggil");
    
   }

  ngOnInit(): void {

    this.interval = setInterval(() => {
      this.counter++
      console.log(this.counter);
      
    }, 1000)

    console.log("Hero ngOnInit dipanggil");
  }

  ngOnDestroy(): void {
    clearInterval(this.interval)
    console.log("Hero ngOnDestroy dipanggil");
  }

}
