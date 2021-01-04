import {Component, OnInit} from '@angular/core';
import {ProductsService} from './products.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ListingProduct} from './model/listing-product.model';
import {catchError, finalize} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products$: Observable<ListingProduct[]>;

  public isLoading = true;

  constructor(private productsService: ProductsService, private snackbar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.products$ = this.productsService.getProducts()
      .pipe(
        catchError(err => {
          this.snackbar.open('Nie udało się pobrać produktów', '', {duration: 3000});
          return throwError(err);
        }),
        finalize(() => {
          this.isLoading = false;
        })
      );
  }

}
