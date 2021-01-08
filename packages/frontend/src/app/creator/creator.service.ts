import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductCategory} from '../shared/product-category.model';
import {Product} from '../shared/product.model';
import {Observable} from 'rxjs';

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

  constructor(private http: HttpClient) { }

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
