import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {Observable} from 'rxjs';

import {ProductCategory} from '../../../shared/product-category.model';
import {ProductManagementService} from '../product-management.service';
import {ProductCategoryType} from '../../../shared/product-category-type.enum';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

enum InputType {
  NUMBER = 'number',
  TEXT = 'text'
}

enum ProductPropertyType {
  SOCKET = 'SOCKET',
  CORE_COUNT = 'CORE_COUNT',
  CLOCK_SPEED = 'CLOCK_SPEED',
  MEMORY_COUNT = 'MEMORY_COUNT',
  MEMORY_CL = 'MEMORY_CL',
  POWER = 'POWER',
  CASE_TYPE = 'CASE_TYPE'
}

@Component({
  selector: 'app-product-management-add-item-dialog',
  templateUrl: './product-management-add-item-dialog.component.html',
  styleUrls: ['./product-management-add-item-dialog.component.scss']
})
export class ProductManagementAddItemDialogComponent implements OnInit {

  public productCategories$: Observable<ProductCategory[]>;

  public propertyNameToInputType: Map<ProductPropertyType, InputType> = new Map<ProductPropertyType, InputType>([
    [ProductPropertyType.MEMORY_COUNT, InputType.NUMBER],
    [ProductPropertyType.CORE_COUNT, InputType.NUMBER],
    [ProductPropertyType.CLOCK_SPEED, InputType.NUMBER],
    [ProductPropertyType.POWER, InputType.NUMBER],
    [ProductPropertyType.MEMORY_COUNT, InputType.NUMBER],
    [ProductPropertyType.CASE_TYPE, InputType.TEXT],
    [ProductPropertyType.MEMORY_CL, InputType.TEXT]
  ]);

  public productCategoryTypeToFormGroup: Map<ProductCategoryType, FormGroup> = new Map<ProductCategoryType, any>([
    [ProductCategoryType.MOTHERBOARD, this.formBuilder.group({
      [ProductPropertyType.SOCKET]: ['', [Validators.minLength(1), Validators.required]],
      name: ['', [Validators.minLength(1), Validators.required]],
    })],
    [ProductCategoryType.MEMORY, this.formBuilder.group({
      [ProductPropertyType.MEMORY_CL]: ['', [Validators.minLength(1), Validators.required]],
      [ProductPropertyType.MEMORY_COUNT]: [0, [Validators.min(1), Validators.required]],
      name: ['', [Validators.minLength(1), Validators.required]]
    })],
    [ProductCategoryType.PROCESSOR, this.formBuilder.group({
      [ProductPropertyType.SOCKET]: ['', [Validators.minLength(1), Validators.required]],
      [ProductPropertyType.CLOCK_SPEED]: [0, [Validators.min(1), Validators.required]],
      [ProductPropertyType.CORE_COUNT]: [0, [Validators.min(1), Validators.required]],
      name: ['', [Validators.minLength(1), Validators.required]]
    })],
    [ProductCategoryType.GRAPHICS_CARD, this.formBuilder.group({
      [ProductPropertyType.MEMORY_COUNT]: [0, [Validators.min(1), Validators.required]],
      [ProductPropertyType.CLOCK_SPEED]: [0, [Validators.min(1), Validators.required]],
      name: ['', [Validators.minLength(1), Validators.required]]
    })],
    [ProductCategoryType.HARDWARE, this.formBuilder.group({})]
  ]);

  public selectedFormGroup = new FormGroup({});

  public selectedProductCategoryType: number | undefined;

  constructor(private dialogRef: MatDialogRef<ProductManagementAddItemDialogComponent>,
              private productManagementService: ProductManagementService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.productCategories$ = this.productManagementService.getProductCategories();
  }

  public handleProductCategoryValueChange($event): void {
    this.selectedProductCategoryType = $event;
    this.selectedFormGroup = this.productCategoryTypeToFormGroup.get($event);
  }

  public submitAddItemForm($event): void {
    $event.preventDefault();
    console.log($event);
    console.log(this.selectedFormGroup.getRawValue());
    console.log(this.selectedProductCategoryType);
  }

}
