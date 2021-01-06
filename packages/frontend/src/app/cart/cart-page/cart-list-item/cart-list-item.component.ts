import {Component, Input} from '@angular/core';
import {CartItem, CartStore} from '../../../core/cart/cart.store';

@Component({
  selector: 'app-cart-list-item',
  templateUrl: './cart-list-item.component.html',
  styleUrls: ['./cart-list-item.component.scss']
})
export class CartListItemComponent {

  @Input() cartItem: CartItem;

  constructor(private cart: CartStore) {
  }

  removeItem(): void {
  }

}
