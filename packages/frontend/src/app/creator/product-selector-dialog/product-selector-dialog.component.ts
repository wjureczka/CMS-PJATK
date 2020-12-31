import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-product-selector-dialog',
  templateUrl: './product-selector-dialog.component.html',
  styleUrls: ['./product-selector-dialog.component.scss']
})
export class ProductSelectorDialogComponent implements OnInit {

  constructor(    private dialogRef: MatDialogRef<ProductSelectorDialogComponent>) { }

  ngOnInit(): void {
  }

  selectProduct(product: any): void {
    this.dialogRef.close(product);
  }
}
