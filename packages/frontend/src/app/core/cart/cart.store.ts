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

  private storageKey = 'cart';

  private cart = new Map<number, CartItem>();

  private subject: BehaviorSubject<Map<number, CartItem>> = new BehaviorSubject(this.cart);

  cartItems$ = this.subject.asObservable();

  totalPrice$: Observable<number>;

  productCount$: Observable<number>;

  constructor() {
    this.totalPrice$ = this.cartItems$
      .pipe(
        map(this.calcTotalPrice)
      );
    this.productCount$ = this.cartItems$
      .pipe(
        map(this.calcProductsCount)
      );

    const itemsFromStorage = this.getItemsFromLocalStorage();

    if (itemsFromStorage) {
      this.subject.next(itemsFromStorage);
    }
  }

  putProduct(cartItem: CartItem): void {
    const cartItems = this.subject.getValue();
    const newCartItems = this.addProductAndGetNewMap(cartItem, cartItems);
    this.addItemsToLocalStorage(newCartItems);
    this.subject.next(newCartItems);
  }

  removeProduct(id: number): void {
    const cartItems = this.subject.getValue();
    const newItems = new Map(cartItems);
    newItems.delete(id);
    this.addItemsToLocalStorage(newItems);
    this.subject.next(newItems);
  }

  emptyTheCart(): void {
    const cartItems = this.subject.getValue();
    const newItems = new Map(cartItems);
    newItems.clear();
    this.addItemsToLocalStorage(newItems);
    this.subject.next(newItems);
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

  private addItemsToLocalStorage(items: Map<number, CartItem>): void {
    const stringifyItems = JSON.stringify([...items]);
    localStorage.setItem(this.storageKey, stringifyItems);
  }

  private getItemsFromLocalStorage(): Map<number, CartItem> {
    const itemsFromStorage = localStorage.getItem(this.storageKey);
    return new Map(JSON.parse(itemsFromStorage));
  }

  private calcTotalPrice(items: Map<number, CartItem>): number {
    let totalPrice = 0;
    items.forEach(item => totalPrice += item.quantity * item.price);
    return totalPrice;
  }

  private calcProductsCount(items: Map<number, CartItem>): number {
    let itemsCount = 0;
    items.forEach(item => itemsCount += item.quantity);
    return itemsCount;
  }

}
