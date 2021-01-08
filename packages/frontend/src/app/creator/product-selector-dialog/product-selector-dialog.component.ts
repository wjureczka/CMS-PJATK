import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CreatorProduct} from '../creator.service';

@Component({
  selector: 'app-product-selector-dialog',
  templateUrl: './product-selector-dialog.component.html',
  styleUrls: ['./product-selector-dialog.component.scss']
})
export class ProductSelectorDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ProductSelectorDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public products: CreatorProduct[]) {
  }

  ngOnInit(): void {
  }

  selectProduct(product: any): void {
    this.dialogRef.close(product);
  }

  close(): void {
    this.dialogRef.close();
  }
}
