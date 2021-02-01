import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {ListingProduct} from '../model/listing-product.model';
import {ProductCategory} from '../../shared/product-category.model';
import {Product} from '../../shared/product.model';
import {ProductCategoryType} from '../../shared/product-category-type.enum';
import {LanguageService} from "../../shared/language.service";


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public products$ = new BehaviorSubject<ListingProduct[]>([]);

  constructor(private http: HttpClient, private languageService: LanguageService) {
  }

  public setProducts(products: ListingProduct[]): void {
    this.products$.next(products);
  }

  public getProducts(): Observable<ListingProduct[]> {
    return this.http.get<ListingProduct[]>('/api/products');
  }

  public getProductImage(productId: number): Observable<ArrayBuffer> {
    // @ts-ignore
    return this.http.get<ArrayBuffer>(`/api/products/${productId}/base64-file`, { responseType: 'text' });
  }

  public getProductsByCategory(category: ProductCategoryType[]): Observable<ListingProduct[]> {
    const mappedQueryString = category.map((productCategory) => `categoryId=${productCategory}`).join('&');

    return this.http.get<ListingProduct[]>(`/api/products/?${mappedQueryString}`);
  }

  public getProductCategories(): Observable<ProductCategory[]> {
    return this.http.get<ProductCategory[]>('/api/categories');
  }

  public getProductById(id: string): Observable<Product > {
    const currentLanguage = this.languageService.currentLanguage.value;

    return this.http.get<Product>(`/api/products/${id}?lang=${currentLanguage}`);
  }

}
