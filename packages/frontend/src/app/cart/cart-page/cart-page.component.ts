import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  dupas = [1, 2, 3, 4, 5];

  constructor() {
  }

  ngOnInit(): void {
  }

}
