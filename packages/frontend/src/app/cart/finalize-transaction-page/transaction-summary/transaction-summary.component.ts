import {Component, Input, OnInit} from '@angular/core';
import {CartItem, CartStore} from '../../../core/cart/cart.store';
import {Observable} from 'rxjs';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-transaction-summary',
  templateUrl: './transaction-summary.component.html',
  styleUrls: ['./transaction-summary.component.scss']
})
export class TransactionSummaryComponent implements OnInit {

  @Input() paymentMethod: string;

  @Input() extraServices: string[];

  cartItemsList$: Observable<CartItem[]>;

  totalPrice$: Observable<number>;

  constructor(private cart: CartStore, private translate: TranslateService) {
  }

  ngOnInit(): void {
    this.cartItemsList$ = this.cart.cartItemsList$;
    this.totalPrice$ = this.cart.totalPrice$;
  }

  listExtraServices(): string {
    return this.extraServices
      .map(service => this.translate.instant(`cart.finalize.${service}`))
      .join(', ');
  }

}
