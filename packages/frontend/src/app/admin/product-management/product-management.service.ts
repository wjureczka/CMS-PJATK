import { Injectable } from '@angular/core';
import {HttpClient, HttpResponseBase} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductCategory} from '../../shared/product-category.model';
import {Product} from '../../shared/product.model';

export interface ProductProducer {
  producerId: string;
  producerName: string;
}

export interface Socket {
  id: number;
  value: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductManagementService {

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/products/with-translation');
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

  public getProductImage(productId: number): Observable<ArrayBuffer> {
    // @ts-ignore
    return this.http.get<ArrayBuffer>(`/api/products/${productId}/base64-file`, { responseType: 'text' });
  }

  public uploadProductImage(productId: number, productImage: any): Observable<HttpResponseBase> {
    return this.http.post<HttpResponseBase>(`/api/products/${productId}/upload`, productImage);
  }

  public getProductCategories(): Observable<ProductCategory[]> {
    return this.http.get<ProductCategory[]>('/api/categories');
  }

  public getProductProducers(): Observable<ProductProducer[]> {
    return this.http.get<ProductProducer[]>('/api/producers');
  }

  public getSockets(): Observable<Socket[]> {
    return this.http.get<Socket[]>('/api/products/sockets');
  }
}
