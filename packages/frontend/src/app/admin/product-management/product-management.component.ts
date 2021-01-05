import {Component, OnInit} from '@angular/core';
import {Product, ProductManagementService} from './product-management.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss']
})
export class ProductManagementComponent implements OnInit {

  public products: Product[];

  public isLoading = true;

  constructor(private productManagementService: ProductManagementService, private snackbar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.productManagementService.getProducts().subscribe((response) => {
        this.products = response;
      },
      () => {
        this.snackbar.open('Nie udało pobrać się produktów', '', {duration: 3000});
      },
      () => {
        this.isLoading = false;
      });
  }

}
