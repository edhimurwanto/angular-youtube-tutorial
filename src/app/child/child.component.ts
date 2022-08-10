import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() counter!: number;
  @Output() counterChange = new EventEmitter<number>();

  isSpecial = true

  products = [
    {
      id: 0,
      name: 'Raket Lining Aeonaut',
      price: 2000000,
      stock: 10
    },
    {
      id: 1,
      name: 'Raket Lining Aeonaut  9000',
      price: 5000000,
      stock: 0
    },
    {
      id: 2,
      name: 'Tas Raket',
      price: 200000,
      stock: 10
    }
  ]

  btnClasses = () => {
    return {
      btn: true,
      "btn-primary": this.isSpecial
    }
  }

  increment() {
    this.handleChangeCounter(this.counter + 1);
  }

  decrement() {
    this.handleChangeCounter(this.counter - 1);
  }

  handleChangeCounter(value) {
    this.counterChange.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
