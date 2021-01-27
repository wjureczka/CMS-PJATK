import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ProductManagementService} from '../product-management.service';
import {FormBuilder} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-product-management-image-item-dialog',
  templateUrl: './product-management-image-item-dialog.component.html',
  styleUrls: ['./product-management-image-item-dialog.component.scss']
})
export class ProductManagementImageItemDialogComponent implements OnInit {

  public productImageBase64: string;

  constructor(
    private dialogRef: MatDialogRef<ProductManagementImageItemDialogComponent>,
    private productManagementService: ProductManagementService,
    private formBuilder: FormBuilder,
    private snackbar: MatSnackBar,
    public domSanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) public productId: number
  ) {
  }

  ngOnInit(): void {
    this.productManagementService.getProductImage(this.productId)
      .subscribe(
        (response) => {
          // @ts-ignore
          this.productImageBase64 = response as string;
        },
        () => {
        }
      );
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }

  public uploadPhoto($event): void {
    const formData = new FormData($event.target);

    this.productManagementService.uploadProductImage(this.productId, formData)
      .subscribe(() => {
        this.dialogRef.close(true);
        },
        (error) => {
          console.error(error, 'error');
          this.snackbar.open('Nie udało się załadować zdjęcia', '', {duration: 3000});
        });
  }
}
