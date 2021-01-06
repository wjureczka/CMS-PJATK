import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {CategoryType} from '../../../shared/category-type.enum';

@Component({
  selector: 'app-product-management-add-item-dialog',
  templateUrl: './product-management-add-item-dialog.component.html',
  styleUrls: ['./product-management-add-item-dialog.component.scss']
})
export class ProductManagementAddItemDialogComponent implements OnInit {

  public categoryTypes = CategoryType;

  constructor(    private dialogRef: MatDialogRef<ProductManagementAddItemDialogComponent>) { }

  ngOnInit(): void {
    console.log(this.categoryTypes);
  }

}
