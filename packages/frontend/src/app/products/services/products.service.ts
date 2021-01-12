import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {ListingProduct} from '../model/listing-product.model';
import {ProductCategory} from '../../shared/product-category.model';
import {Product} from '../../shared/product.model';
import {ProductCategoryType} from '../../shared/product-category-type.enum';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public products$ = new BehaviorSubject<ListingProduct[]>([]);

  constructor(private http: HttpClient) {
  }

  public setProducts(products: ListingProduct[]): void {
    this.products$.next(products);
  }

  public getProducts(): Observable<ListingProduct[]> {
    return this.http.get<ListingProduct[]>('/api/products');
  }

  public getProductsByCategory(category: ProductCategoryType[]): Observable<ListingProduct[]> {
    const mappedQueryString = category.map((productCategory) => `categoryId=${productCategory}`).join('&');

    return this.http.get<ListingProduct[]>(`/api/products/?${mappedQueryString}`);
  }

  public getProductCategories(): Observable<ProductCategory[]> {
    return this.http.get<ProductCategory[]>('/api/categories');
  }

  public getProductById(id: string): Observable<Product > {
    return this.http.get<Product>(`/api/products/${id}`);
  }

}
