import {Component, Input, OnInit} from '@angular/core';
import {CartItem} from '../../../../core/cart/cart.store';
import {ProductsService} from '../../../../products/services/products.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-transaction-summary-item',
  templateUrl: './transaction-summary-item.component.html',
  styleUrls: ['./transaction-summary-item.component.scss']
})
export class TransactionSummaryItemComponent implements OnInit {

  @Input() cartItem: CartItem;

  public productImageBase64: string;

  constructor(private productsService: ProductsService,
              public domSanitizer: DomSanitizer
  ) {
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

}
