import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck } from '@angular/core';

import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit, DoCheck {

  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  constructor() {
    console.log('1 constructor');
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('2 ngOnChanges: ', changes);
  // }

  ngOnInit() {
    console.log('3 ngOnInit');
  }

  ngDoCheck() {
    console.log('4 ngDoCheck');
  }

  addCart() {
    console.log('Añadir al carrito');
    this.productClicked.emit(this.product.id);
  }
}
