import {Component, Input, OnInit} from '@angular/core';
import {CartItem, CartStore} from '../../../../core/cart/cart.store';

@Component({
  selector: 'app-details-panel',
  templateUrl: './details-panel.component.html',
  styleUrls: ['./details-panel.component.scss']
})
export class DetailsPanelComponent implements OnInit {

  @Input() productId: number;

  @Input() price: number;

  @Input() description: string;

  @Input() producer: string;

  selectedQuantity: 0;

  constructor(private cart: CartStore) {
  }

  ngOnInit(): void {
  }

  putToCart(): void {
    const product: CartItem = {
      productId: this.productId,
      description: this.description,
      producer: this.producer,
      price: this.price,
      quantity: this.selectedQuantity,
    };
    this.cart.putProduct(product);
  }
}
