import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export interface CartItem {
  productId: number;
  description: string;
  producer: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartStore {

  private cart = new Map<number, CartItem>();

  private subject: BehaviorSubject<Map<number, CartItem>> = new BehaviorSubject(this.cart);

  cartItems$ = this.subject.asObservable();

  totalPrice$: Observable<number>;

  constructor() {
    this.totalPrice$ = this.cartItems$
      .pipe(
        map(this.calculateTotalPrice)
      );
  }

  putProduct(cartItem: CartItem): void {
    const cartItems = this.subject.getValue();
    const newCaratItems = this.addProductAndGetNewMap(cartItem, cartItems);
    this.subject.next(newCaratItems);
  }

  removeProduct(id: number): void {
    /* const cartItems = this.subject.getValue();
     const newItems = cartItems
       .filter(({productId}) => productId !== id);
     this.subject.next(newItems);*/
  }

  private addProductAndGetNewMap(item: CartItem, items: Map<number, CartItem>): Map<number, CartItem> {
    const newItem = {...item};
    const newItems = new Map(items);

    if (newItems.has(newItem.productId)) {
      const existingItem = newItems.get(newItem.productId);
      existingItem.quantity = existingItem.quantity + newItem.quantity;
    } else {
      newItems.set(newItem.productId, newItem);
    }

    return newItems;
  }

  private calculateTotalPrice = (items: Map<number, CartItem>): number => {
    let totalPrice = 0;
    items.forEach(item => totalPrice += item.quantity * item.price);
    return totalPrice;
  }

}
