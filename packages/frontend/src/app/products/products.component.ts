import {Component, OnInit} from '@angular/core';
import {ProductsService} from './products.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ListingProduct} from './model/listing-product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: ListingProduct[] = [];

  public isLoading = true;

  constructor(private productsService: ProductsService, private snackbar: MatSnackBar) {
  }

  ngOnInit(): void {

    this.productsService
      .getProducts()
      .subscribe(
        (response) => {
          this.products = response;
        },
        (error) => {
          this.snackbar.open('Nie udało się pobrać produktów', '', {duration: 3000});
        },
        () => {
          this.isLoading = false;
        }
      );
  }

}
