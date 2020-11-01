import { Component, OnInit } from '@angular/core';

import { Product } from '../../../product.model';
import { CartService } from '../../../core/services/cart/cart.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(
    private cartService: CartService
  ) {
    this.products$ = this.cartService.cart$.pipe(
      map(products => {
        // This array will contain the index of repeated element
        const repeated = [];
        // This will be the new array of products to show at the view
        const newProducts: Product[] = [];

        products.forEach((product, index) => {
          // Copy the current product to be able for manipulate
          const newProduct: Product = {...product};
          // This will be the counter of each repeated elements in the cart
          let cont = 1;

          // Don't process repeated elements
          if (!repeated.includes(index)) {
            products.forEach((product2, index2) => {
              // This determine if current product is a repetition
              if (index !== index2 && product.id === product2.id) {
                // Add to current product counter
                cont++;
                // Add current product to repeated array
                repeated.push(index2);
              }
            });

            // At the end of each iteration
            // Add counter to the copy of current product
            newProduct.quantity = cont;
            // Add this product to newProducts array
            newProducts.push(newProduct);
          }
        });

        return newProducts;
      })
    );
  }

  ngOnInit(): void {
  }

}
