import {Component, OnInit} from '@angular/core';
import {CartStore} from '../../core/cart/cart.store';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  productCount$: Observable<number>;

  constructor(private cart: CartStore) {
  }

  ngOnInit(): void {
    this.productCount$ = this.cart.productCount$;
  }

}
