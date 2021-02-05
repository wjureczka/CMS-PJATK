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
import {PaymentSelectionComponent} from './finalize-transaction-page/payment-selection/payment-selection.component';
import {MatStepperModule} from '@angular/material/stepper';
import {TransactionSummaryComponent} from './finalize-transaction-page/transaction-summary/transaction-summary.component';
import {OrderSuccessDialogComponent} from './finalize-transaction-page/order-success-dialog/order-success-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {TranslateModule} from '@ngx-translate/core';
import { TransactionSummaryItemComponent } from './finalize-transaction-page/transaction-summary/transaction-summary-item/transaction-summary-item.component';
import {MatDividerModule} from "@angular/material/divider";
import { PaymentTypeTranslatePipe } from './pipes/payment-type-translate.pipe';


@NgModule({
  declarations: [
    CartPageComponent,
    CartListItemComponent,
    CartSummaryComponent,
    FinalizeTransactionPageComponent,
    AdditionalServicesComponent,
    PaymentSelectionComponent,
    TransactionSummaryComponent,
    OrderSuccessDialogComponent,
    TransactionSummaryItemComponent,
    PaymentTypeTranslatePipe
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatStepperModule,
        MatDialogModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        RouterModule,
        TranslateModule,
        MatDividerModule
    ],
  entryComponents: [
    OrderSuccessDialogComponent
  ]
})
export class CartModule {
}
