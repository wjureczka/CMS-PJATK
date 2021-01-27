import {Component, Input, OnInit} from '@angular/core';
import {CartItem, CartStore} from '../../../core/cart/cart.store';
import {ProductsService} from '../../../products/services/products.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-cart-list-item',
  templateUrl: './cart-list-item.component.html',
  styleUrls: ['./cart-list-item.component.scss']
})
export class CartListItemComponent implements OnInit{

  @Input() cartItem: CartItem;

  public productImageBase64: string;

  constructor(private cart: CartStore,
              private productsService: ProductsService,
              public domSanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.productsService.getProductImage(this.cartItem.productId)
      .subscribe(
        (response) => {
          // @ts-ignore
          this.productImageBase64 = response as string;
        },
        () => {
        }
      );
  }

  removeItem(): void {
    this.cart.removeProduct(this.cartItem.productId);
  }
}
