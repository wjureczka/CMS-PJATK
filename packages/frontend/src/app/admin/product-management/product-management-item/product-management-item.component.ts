import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductManagementService} from '../product-management.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';

import {Product} from '../../../shared/product.model';
import {ProductManagementEditItemDialogComponent} from '../product-management-edit-item-dialog/product-management-edit-item-dialog.component';

@Component({
  selector: 'app-product-management-item',
  templateUrl: './product-management-item.component.html',
  styleUrls: ['./product-management-item.component.scss']
})
export class ProductManagementItemComponent {

  @Input() product: Product;

  @Output() productDeleted = new EventEmitter<Product>();

  @Output() productEdited = new EventEmitter<Product>();

  public isLoading = false;

  constructor(
    private productManagementService: ProductManagementService,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) {
  }

  editProduct(): void {
    const dialogRef = this.dialog.open(ProductManagementEditItemDialogComponent, {
      width: '300px',
      height: '65%',
      data: this.product
    });

    dialogRef.afterClosed().subscribe((product) => {
      if (!product) {
        return;
      }

      this.productEdited.emit(product);
    });
  }

  deleteProduct(): void {
    this.isLoading = true;

    this.productManagementService.deleteProduct(this.product.id)
      .subscribe(
        () => {
          this.productDeleted.emit(this.product);
        },
        () => {
          this.snackbar.open('Nie udało się usunąć produktu', '', {duration: 3000});
          this.isLoading = false;
        });
  }
}
