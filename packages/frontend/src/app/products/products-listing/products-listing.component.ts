import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ProductsService} from '../services/products.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ListingProduct} from '../model/listing-product.model';
import {combineLatest, Observable, throwError} from 'rxjs';
import {map, startWith, switchMap, tap} from 'rxjs/operators';
import {ProductsListingCategorySelectComponent} from './products-listing-category-select/products-listing-category-select.component';
import {ProductCategoryType} from '../../shared/product-category-type.enum';
import {Page} from '../../shared/model/page';
import {Product} from '../../shared/product.model';
import {MatPaginator, PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-products',
  templateUrl: './products-listing.component.html',
  styleUrls: ['./products-listing.component.scss']
})
export class ProductsListingComponent implements OnInit, AfterViewInit {

  public products$: Observable<ListingProduct[]>;

  public isLoading = true;

  public pageCfg = {
    totalElements: 0,
    itemsPerPage: 5,
    pageSizeOptions: [5, 10, 15, 20],
  };

  @ViewChild('categorySelect')
  categorySelect: ProductsListingCategorySelectComponent;

  @ViewChild('paginator')
  paginator: MatPaginator;

  constructor(private productsService: ProductsService, private snackbar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.products$ = this.productsService.products$;
  }

  ngAfterViewInit(): void {
    const categories$ = this.categorySelect.categoriesChange.pipe(startWith([]));
    const page$ = this.paginator.page
      .pipe(
        tap(console.log),
        map(({pageIndex, pageSize}) => ({pageIndex, pageSize} as Partial<PageEvent>)),
        startWith({pageIndex: 0, pageSize: this.pageCfg.itemsPerPage})
      );

    combineLatest([categories$, page$])
      .pipe(
        switchMap(([categories, page]) =>
          this.getProductsByCategories(categories, page.pageIndex, page.pageSize))
      )
      .subscribe(
        payload => this.onSuccess(payload),
        error => this.onError(error)
      );
  }

  private getProductsByCategories(categories: ProductCategoryType[], page: number, size: number): Observable<Page<Product>> {
    return !categories.length ?
      this.productsService.getProductsPage(page, size)
      : this.productsService.getProductsPageByCategory(categories, page, size);
  }

  private onSuccess({content, totalElements}): void {
    this.productsService.setProducts(content);
    this.pageCfg = {...this.pageCfg, totalElements};
    this.isLoading = false;
  }

  private onError(error): Observable<never> {
    this.snackbar.open('Nie udało się pobrać produktu', '', {duration: 3000});
    return throwError(error);
  }

}
