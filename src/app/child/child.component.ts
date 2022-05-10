import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() counter! : number;
  @Output() counterChange = new EventEmitter<number>();

  isSpecial = false

  increment(){
    this.handleChangeCounter(this.counter + 1);
  }

  decrement(){
    this.handleChangeCounter(this.counter - 1);
  }

  handleChangeCounter(value){
    this.counterChange.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
