import {Component, OnInit} from '@angular/core';
import {CartItem, CartStore} from '../../core/cart/cart.store';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  cartItemsList$: Observable<CartItem[]>;

  totalPrice$: Observable<number>;

  constructor(private cart: CartStore) {
  }

  ngOnInit(): void {
    this.cartItemsList$ = this.cart.cartItemsList$;
    this.totalPrice$ = this.cart.totalPrice$;
  }

}
