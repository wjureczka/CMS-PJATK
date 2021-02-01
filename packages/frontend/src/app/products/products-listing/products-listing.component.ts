import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ProductsService} from '../services/products.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ListingProduct} from '../model/listing-product.model';
import {combineLatest, Observable, throwError} from 'rxjs';
import {startWith, tap} from 'rxjs/operators';
import {PaginatorCfg, PaginatorComponent} from '../../shared/components/paginator/paginator.component';
import {ProductsListingCategorySelectComponent} from './products-listing-category-select/products-listing-category-select.component';
import {ProductCategoryType} from '../../shared/product-category-type.enum';

@Component({
  selector: 'app-products',
  templateUrl: './products-listing.component.html',
  styleUrls: ['./products-listing.component.scss']
})
export class ProductsListingComponent implements OnInit, AfterViewInit {

  public products$: Observable<ListingProduct[]>;

  public isLoading = true;

  public pageCfg: PaginatorCfg = {
    totalPages: 7,
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
    this.initProducts();
  }

  ngAfterViewInit(): void {
    const categories$ = this.categorySelect.categoriesChange.pipe(startWith([]));
    const page$ = this.paginator.pageChange.pipe(startWith(0));
    combineLatest([categories$, page$])
      .pipe(
       tap(console.log)
      ).subscribe(([categories, page]) => this.searchByCategories(categories, page));
  }

  changePage(pageNumber: number): void {
    this.initProducts(pageNumber);
  }

  private initProducts(page = 0, size = this.pageCfg.itemsPerPage): void {
    this.productsService.getProductsPage(page, size).subscribe(
      ({content, totalPages}) => {
        this.productsService.setProducts(content);
        this.pageCfg = {...this.pageCfg, totalPages};
        this.isLoading = false;
      }, (error) => {
        console.error(error);
        this.snackbar.open('Nie udało się pobrać produktów', '', {duration: 3000});
        this.isLoading = false;

        return throwError(error);
      });
  }

  searchByCategories(categories: ProductCategoryType[], page): void {

    if (!categories.length) {
      this.initProducts(page);
      return;
    }

    this.productsService.getProductsByCategory(categories, page, this.pageCfg.itemsPerPage)
      .subscribe(
        ({content, totalPages}) => {
          this.productsService.setProducts(content);
          this.pageCfg = {...this.pageCfg, totalPages};
          this.isLoading = false;
        }, (error) => {
          this.snackbar.open('Nie udało się pobrać produktu', '', {duration: 3000});

          return throwError(error);
        });
  }
}
