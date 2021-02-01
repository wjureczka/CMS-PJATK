import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ProductsService} from '../services/products.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ListingProduct} from '../model/listing-product.model';
import {combineLatest, Observable, throwError} from 'rxjs';
import {startWith, switchMap} from 'rxjs/operators';
import {PaginatorCfg, PaginatorComponent} from '../../shared/components/paginator/paginator.component';
import {ProductsListingCategorySelectComponent} from './products-listing-category-select/products-listing-category-select.component';
import {ProductCategoryType} from '../../shared/product-category-type.enum';
import {Page} from '../../shared/model/page';
import {Product} from '../../shared/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products-listing.component.html',
  styleUrls: ['./products-listing.component.scss']
})
export class ProductsListingComponent implements OnInit, AfterViewInit {

  public products$: Observable<ListingProduct[]>;

  public isLoading = true;

  public pageCfg: PaginatorCfg = {
    totalPages: 0,
    itemsPerPage: 1,
    activePage: 0
  };

  @ViewChild('categorySelect')
  categorySelect: ProductsListingCategorySelectComponent;

  @ViewChild('paginator')
  paginator: PaginatorComponent;

  constructor(private productsService: ProductsService, private snackbar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.products$ = this.productsService.products$;
  }

  ngAfterViewInit(): void {
    const categories$ = this.categorySelect.categoriesChange.pipe(startWith([]));
    const page$ = this.paginator.pageChange.pipe(startWith(0));

    combineLatest([categories$, page$])
      .pipe(
        switchMap(([categories, page]) =>
          this.getProductsByCategories(categories, page))
      )
      .subscribe(
        payload => this.onSuccess(payload),
        error => this.onError(error)
      );
  }

  private getProductsByCategories(categories: ProductCategoryType[], page): Observable<Page<Product>> {
    return !categories.length ?
      this.productsService.getProductsPage(page, this.pageCfg.itemsPerPage)
      : this.productsService.getProductsPageByCategory(categories, page, this.pageCfg.itemsPerPage);
  }

  private onSuccess({content, totalPages}): void {
    this.productsService.setProducts(content);
    this.pageCfg = {...this.pageCfg, totalPages};
    this.isLoading = false;
  }

  private onError(error): Observable<never> {
    this.snackbar.open('Nie udało się pobrać produktu', '', {duration: 3000});
    return throwError(error);
  }

}
