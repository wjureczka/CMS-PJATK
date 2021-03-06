import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductCategory} from '../shared/product-category.model';
import {Product} from '../shared/product.model';
import {Observable} from 'rxjs';
import {CartStore} from '../core/cart/cart.store';

export interface CreatorProduct extends Product {
  compatible: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CreatorService {

  public selectedProcessor: CreatorProduct | undefined;

  public selectedGraphicCard: CreatorProduct | undefined;

  public selectedMotherBoard: CreatorProduct | undefined;

  public selectedRAM: CreatorProduct | undefined;

  public selectedPowerSupply: CreatorProduct | undefined;

  public selectedComputerCase: CreatorProduct | undefined;

  constructor(private http: HttpClient, private cartStore: CartStore) { }

  public resetCreator(): void {
    this.selectedProcessor = undefined;
    this.selectedGraphicCard = undefined;
    this.selectedMotherBoard = undefined;
    this.selectedRAM = undefined;
    this.selectedPowerSupply = undefined;
    this.selectedComputerCase = undefined;
  }

  public addSetToCart(): void {
    const products = [
      this.selectedComputerCase,
      this.selectedPowerSupply,
      this.selectedRAM,
      this.selectedMotherBoard,
      this.selectedGraphicCard,
      this.selectedProcessor
    ].filter(Boolean);

    products.forEach((product) => {
      this.cartStore.putProduct({
        description: product.description,
        price: product.price,
        producer: product.producer.producerName,
        productId: product.id,
        quantity: 1
      });
    });
  }

  public getCompatibleProductsFromCategory(productCategory: ProductCategory): Observable<CreatorProduct[]> {
    return this.http.post<CreatorProduct[]>('/api/creator', {
      category: productCategory,
      computerCaseId: this.selectedComputerCase?.id || null,
      graphicCardId: this.selectedGraphicCard?.id || null,
      motherboardId: this.selectedMotherBoard?.id || null,
      powerSupplyId: this.selectedPowerSupply?.id || null,
      processorId: this.selectedProcessor?.id || null,
      ramId: this.selectedRAM?.id || null
    });
  }
}
