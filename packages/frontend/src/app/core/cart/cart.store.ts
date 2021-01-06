import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export interface CartItem {
  productId: number;
  description: string;
  producer: string;
  price: number;
  quantity: null | number;
}

@Injectable({
  providedIn: 'root'
})
export class CartStore {

  private subject: BehaviorSubject<CartItem[]> = new BehaviorSubject([]);

  cartItems$ = this.subject.asObservable();

  totalPrice$: Observable<number>;

  constructor() {
    this.totalPrice$ = this.cartItems$
      .pipe(
        map(this.calculateTotalPrice)
      );
  }

  putProduct(cartPosition: CartItem): void {
    const cartItems = this.subject.getValue();
    const newCaratItems = [cartPosition, ...cartItems];
    this.subject.next(newCaratItems);
  }

  removeProduct(id: number): void {
    const cartItems = this.subject.getValue();
    const newItems = cartItems
      .filter(({productId}) => productId !== id);
    this.subject.next(newItems);
  }

  private calculateTotalPrice = (items: CartItem[]): number => {
    return items
      .map(item => item.price)
      .reduce((one, two) => (one + two)
      );
  }

}
