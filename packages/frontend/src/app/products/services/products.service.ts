import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {ListingProduct} from '../model/listing-product.model';
import {ProductCategory} from '../../shared/product-category.model';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {
  }

  public getProducts(): Observable<ListingProduct[]> {
    return this.http.get<ListingProduct[]>('/api/products');
  }

  public getProductCategories(): Observable<ProductCategory[]> {
    return this.http.get<ProductCategory[]>('/api/categories');
  }

  public getProductById(id: string): Observable<ListingProduct> {
    return this.http.get<ListingProduct>(`/api/products/${id}`);
  }

}
