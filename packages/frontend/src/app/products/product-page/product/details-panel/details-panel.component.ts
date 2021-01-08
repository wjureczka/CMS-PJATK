import {Component, Input, OnInit} from '@angular/core';
import {CartItem, CartStore} from '../../../../core/cart/cart.store';
import {Router} from '@angular/router';

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

  selectedQuantity = 1;

  constructor(private cart: CartStore,
              private router: Router) {
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
    this.router.navigate(['/products']);
  }
}
