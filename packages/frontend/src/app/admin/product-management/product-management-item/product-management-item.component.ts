import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductManagementService} from '../product-management.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {DomSanitizer} from '@angular/platform-browser';

import {Product} from '../../../shared/product.model';
import {ProductManagementEditItemDialogComponent} from '../product-management-edit-item-dialog/product-management-edit-item-dialog.component';
import {ProductManagementImageItemDialogComponent} from '../product-management-image-item-dialog/product-management-image-item-dialog.component';

@Component({
  selector: 'app-product-management-item',
  templateUrl: './product-management-item.component.html',
  styleUrls: ['./product-management-item.component.scss']
})
export class ProductManagementItemComponent implements OnInit {


  @Input() product: Product;

  @Output() productDeleted = new EventEmitter<Product>();

  @Output() productEdited = new EventEmitter<Product>();

  public productImageBase64: string;

  public isLoading = false;

  constructor(
    private productManagementService: ProductManagementService,
    private snackbar: MatSnackBar,
    private dialog: MatDialog,
    public domSanitizer: DomSanitizer
  ) {
  }

  ngOnInit(): void {
    this.productManagementService.getProductImage(this.product.id)
      .subscribe(
        (response) => {
          // @ts-ignore
          this.productImageBase64 = response as string;
        },
        () => {
        }
      );
  }

  editProduct(): void {
    const dialogRef = this.dialog.open(ProductManagementEditItemDialogComponent, {
      width: '600px',
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

  public editImage(): void {
    const dialogRef = this.dialog.open(ProductManagementImageItemDialogComponent, {
      width: '500px',
      minWidth: '300px',
      height: '65%',
      data: this.product.id
    });

    dialogRef.afterClosed().subscribe((success) => {
      if (!success) {
        return;
      }

      this.productManagementService.getProductImage(this.product.id)
        .subscribe(
          (response) => {
            // @ts-ignore
            this.productImageBase64 = response as string;
          },
          () => {
            this.snackbar.open('Nie udało się pobrać zdjecia', '', { duration: 3000 });
          }
        );
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
