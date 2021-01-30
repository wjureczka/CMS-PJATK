import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../services/products.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ListingProduct} from '../model/listing-product.model';
import {Observable, throwError} from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products-listing.component.html',
  styleUrls: ['./products-listing.component.scss']
})
export class ProductsListingComponent implements OnInit {

  public products$: Observable<ListingProduct[]>;

  public isLoading = true;

  constructor(private productsService: ProductsService, private snackbar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.products$ = this.productsService.products$;
    this.initProducts();
  }

  changePage(pageNumber: number): void {
    this.initProducts(pageNumber);
  }

  private initProducts(page = 0, size = 10): void {
    this.productsService.getProducts()
      .subscribe(
        (result) => {
          this.productsService.setProducts(result);
          this.isLoading = false;
        }, (error) => {
          console.error(error);
          this.snackbar.open('Nie udało się pobrać produktów', '', {duration: 3000});
          this.isLoading = false;

          return throwError(error);
        });
  }

}
