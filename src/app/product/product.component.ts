import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
  DoCheck,
  OnDestroy
} from '@angular/core';

import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {

  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today: Date = new Date();

  constructor() {
    console.log('1 constructor');
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('2 ngOnChanges: ', changes);
  // }

  ngOnInit(): void {
    console.log('3 ngOnInit');
  }

  ngDoCheck(): void {
    console.log('4 ngDoCheck');
  }

  ngOnDestroy(): void {
    console.log('5 ngOnDestroy');
  }

  addCart(): void {
    console.log('Añadir al carrito');
    this.productClicked.emit(this.product.id);
  }
}