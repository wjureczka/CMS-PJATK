import {Component, OnInit, ViewChild} from '@angular/core';
import {MatHorizontalStepper} from '@angular/material/stepper';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {OrderSuccessDialogComponent} from './order-success-dialog/order-success-dialog.component';
import {CartStore} from '../../core/cart/cart.store';

@Component({
  selector: 'app-finalize-transaction-page',
  templateUrl: './finalize-transaction-page.component.html',
  styleUrls: ['./finalize-transaction-page.component.scss']
})
export class FinalizeTransactionPageComponent implements OnInit {

  @ViewChild('stepper')
  stepper: MatHorizontalStepper;

  constructor(private router: Router,
              private cart: CartStore,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  nextStep(): void {
    const maxSteps = this.stepper.steps.length;

    if (this.stepper.selectedIndex === maxSteps - 1) {
      this.dialog.open(OrderSuccessDialogComponent, {disableClose: true})
        .afterClosed()
        .subscribe(
          () => this.onTransactionSuccess()
        );
    }

    this.stepper.next();
  }

  previousStep(): void {
    if (!this.stepper.selectedIndex) {
      this.router.navigate(['../cart']);
    }
    this.stepper.previous();
  }

  private onTransactionSuccess(): void {
    this.router.navigate(['../products']);
    this.cart.emptyTheCart();
  }

}
