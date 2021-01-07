import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {Observable} from 'rxjs';

import {ProductCategory} from '../../../shared/product-category.model';
import {ProductManagementService} from '../product-management.service';

@Component({
  selector: 'app-product-management-add-item-dialog',
  templateUrl: './product-management-add-item-dialog.component.html',
  styleUrls: ['./product-management-add-item-dialog.component.scss']
})
export class ProductManagementAddItemDialogComponent implements OnInit {

  public productCategories$: Observable<ProductCategory[]>;

  constructor(private dialogRef: MatDialogRef<ProductManagementAddItemDialogComponent>,
              private productManagementService: ProductManagementService) { }

  ngOnInit(): void {
    this.productCategories$ = this.productManagementService.getProductCategories();
  }

}
