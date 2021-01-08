import { Injectable } from '@angular/core';
import {HttpClient, HttpResponseBase} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductCategory} from '../../shared/product-category.model';
import {Product} from '../../shared/product.model';

export interface ProductProducer {
  producerId: string;
  producerName: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductManagementService {

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/products');
  }

  public deleteProduct(productId: number): Observable<HttpResponseBase> {
    return this.http.delete<HttpResponseBase>(`/api/products/${productId}`);
  }

  public addProduct(product: any): Observable<HttpResponseBase> {
    return this.http.post<HttpResponseBase>('/api/products', { ...product });
  }

  public editProduct(product: Product): Observable<HttpResponseBase> {
    return this.http.put<HttpResponseBase>('/api/products', { ...product });
  }

  public getProductCategories(): Observable<ProductCategory[]> {
    return this.http.get<ProductCategory[]>('/api/categories');
  }

  public getProductProducers(): Observable<ProductProducer[]> {
    return this.http.get<ProductProducer[]>('/api/producers');
  }
}
