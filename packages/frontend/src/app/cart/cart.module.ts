import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CartPageComponent} from './cart-page/cart-page.component';

import {CartListItemComponent} from './cart-page/cart-list-item/cart-list-item.component';
import {RouterModule} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {CartSummaryComponent} from './cart-page/cart-summary/cart-summary.component';
import {MatButtonModule} from '@angular/material/button';
import {FinalizeTransactionPageComponent} from './finalize-transaction-page/finalize-transaction-page.component';
import {AdditionalServicesComponent} from './finalize-transaction-page/additional-services/additional-services.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    CartPageComponent,
    CartListItemComponent,
    CartSummaryComponent,
    FinalizeTransactionPageComponent,
    AdditionalServicesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    RouterModule
  ]
})
export class CartModule {
}
