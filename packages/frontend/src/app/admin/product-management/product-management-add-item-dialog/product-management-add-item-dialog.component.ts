import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {Observable} from 'rxjs';

import {ProductCategory} from '../../../shared/product-category.model';
import {ProductManagementService} from '../product-management.service';
import {ProductCategoryType} from '../../../shared/product-category-type.enum';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-management-add-item-dialog',
  templateUrl: './product-management-add-item-dialog.component.html',
  styleUrls: ['./product-management-add-item-dialog.component.scss']
})
export class ProductManagementAddItemDialogComponent implements OnInit {

  public productCategories$: Observable<ProductCategory[]>;

  public productCategoryTypeToFormGroup: Map<ProductCategoryType, FormGroup> = new Map<ProductCategoryType, any>([
    [ProductCategoryType.MOTHERBOARD, this.formBuilder.group({
      socket: ['', [Validators.minLength(1), Validators.required]]
    })],
    [ProductCategoryType.MEMORY, this.formBuilder.group({})],
    [ProductCategoryType.PROCESSOR, this.formBuilder.group({})],
    [ProductCategoryType.GRAPHICS_CARD, this.formBuilder.group({})],
  ]);

  public selectedFormGroup: FormGroup | undefined;


  constructor(private dialogRef: MatDialogRef<ProductManagementAddItemDialogComponent>,
              private productManagementService: ProductManagementService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.productCategories$ = this.productManagementService.getProductCategories();
  }

  public handleProductCategoryValueChange($event): void {
    this.selectedFormGroup = this.productCategoryTypeToFormGroup.get($event);
  }

  public submitAddItemForm($event): void {
    $event.preventDefault();
    console.log($event);
    console.log(this.selectedFormGroup.getRawValue());
  }

}
