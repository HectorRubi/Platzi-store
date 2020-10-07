import { Component, Input } from '@angular/core';

import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent {

  @Input() product: Product;

  addCart() {
    console.log('Añadir al carrito');
  }
}
