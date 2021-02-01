import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {ListingProduct} from '../model/listing-product.model';
import {ProductCategory} from '../../shared/product-category.model';
import {Product} from '../../shared/product.model';
import {ProductCategoryType} from '../../shared/product-category-type.enum';
import {Page} from '../../shared/model/page';


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

  public getProductsPage(page: number, size: number): Observable<Page<Product>> {
    return this.http.get<Page<Product>>('/api/products/all',
      {params: {page: `${page}`, size: `${size}`}}
    );
  }

  public getProductImage(productId: number): Observable<ArrayBuffer> {
    // @ts-ignore
    return this.http.get<ArrayBuffer>(`/api/products/${productId}/base64-file`, {responseType: 'text'});
  }

  public getProductsPageByCategory(categories: ProductCategoryType[], page: number, size: number): Observable<Page<Product>> {
    const mappedQueryString = [
      ...categories.map((productCategory) => `categoryId=${productCategory}`),
      `page=${page}`,
      `size=${size}`
    ].join('&');
    return this.http.get<Page<Product>>(`/api/products/?${mappedQueryString}`);
  }

  public getProductCategories(): Observable<ProductCategory[]> {
    return this.http.get<ProductCategory[]>('/api/categories');
  }

  public getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`/api/products/${id}`);
  }

}
