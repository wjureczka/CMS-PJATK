import { Injectable } from '@angular/core';
import {HttpClient, HttpResponseBase} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Product {
  description: string;
  id: number;
  price: number;
  category: {
    categoryId: number;
    categoryType: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class ProductManagementService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/products');
  }

  deleteProduct(productId: number): Observable<HttpResponseBase> {
    return this.http.delete<HttpResponseBase>(`/api/products/${productId}`);
  }
}
