import {Component, OnInit} from '@angular/core';
import {ProductManagementService} from './product-management.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {ProductManagementAddItemDialogComponent} from './product-management-add-item-dialog/product-management-add-item-dialog.component';
import {Product} from '../../shared/product.model';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss']
})
export class ProductManagementComponent implements OnInit {

  public products: Product[];

  public isLoading = true;

  constructor(private productManagementService: ProductManagementService,
              private snackbar: MatSnackBar,
              private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(): void {
    this.productManagementService.getProducts().subscribe((response) => {
        this.products = response;
        this.isLoading = false;
      },
      () => {
        this.snackbar.open('Nie udało pobrać się produktów', '', {duration: 3000});
        this.isLoading = false;
      });
  }

  handleProductEdit(editedProduct: Product): void {
    let indexToEdit;

    const productFound = this.products.find((product, index) => {
      if (product.id === editedProduct.id) {
        indexToEdit = index;
        return true;
      }

      return false;
    });

    this.products.splice(indexToEdit, 1, editedProduct);
  }

  handleProductDelete(deletedProduct: Product): void {
    this.products = this.products.filter((product) => product.id !== deletedProduct.id);
  }

  openAddItemDialog(): void {
    const dialogRef = this.dialog.open(ProductManagementAddItemDialogComponent, {width: '600px', height: '65%'});

    dialogRef.afterClosed().subscribe((itemAdded) => {
      if (!itemAdded) {
        return;
      }

      this.getProducts();
    });
  }
}
