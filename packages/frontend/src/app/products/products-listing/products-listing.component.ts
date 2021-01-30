import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../services/products.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ListingProduct} from '../model/listing-product.model';
import {Observable, throwError} from 'rxjs';
import {tap} from 'rxjs/operators';
import {PaginatorCfg} from '../../shared/components/paginator/paginator.component';

@Component({
  selector: 'app-products',
  templateUrl: './products-listing.component.html',
  styleUrls: ['./products-listing.component.scss']
})
export class ProductsListingComponent implements OnInit {

  public products$: Observable<ListingProduct[]>;

  public isLoading = true;

  public pageCfg: PaginatorCfg = {
    totalPages: 7,
    itemsPerPage: 10,
    activePage: 0
  };

  constructor(private productsService: ProductsService, private snackbar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.products$ = this.productsService.products$;
    this.initProducts();
  }

  changePage(pageNumber: number): void {
    this.initProducts(pageNumber);
  }

  private initProducts(page = 0, size = 1): void {
    this.productsService.getProductsPage(page, size)
      .pipe(tap(console.log))
      .subscribe(
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

}
