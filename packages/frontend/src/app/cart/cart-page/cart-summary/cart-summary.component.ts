import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent implements OnInit {

  @Input() totalPrice: number;

  constructor() {
  }

  ngOnInit(): void {
  }

}
