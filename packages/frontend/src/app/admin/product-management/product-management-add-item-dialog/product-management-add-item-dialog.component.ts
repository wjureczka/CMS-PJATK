import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {Observable} from 'rxjs';

import {ProductCategory} from '../../../shared/product-category.model';
import {ProductManagementService, ProductProducer} from '../product-management.service';
import {ProductCategoryType} from '../../../shared/product-category-type.enum';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

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

  public productProducers$: Observable<ProductProducer[]>;

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
      productProperties: this.formBuilder.group({
        [ProductPropertyType.SOCKET]: ['', [Validators.minLength(2), Validators.required]],
      })
    })],
    [ProductCategoryType.MEMORY, this.formBuilder.group({
      productProperties: this.formBuilder.group({
        [ProductPropertyType.MEMORY_CL]: ['', [Validators.minLength(2), Validators.required]],
        [ProductPropertyType.MEMORY_COUNT]: [0, [Validators.min(1), Validators.required]],
      })
    })],
    [ProductCategoryType.PROCESSOR, this.formBuilder.group({
      productProperties: this.formBuilder.group({
        [ProductPropertyType.SOCKET]: ['', [Validators.minLength(1), Validators.required]],
        [ProductPropertyType.CLOCK_SPEED]: [0, [Validators.min(1), Validators.required]],
        [ProductPropertyType.CORE_COUNT]: [0, [Validators.min(1), Validators.required]],
      })
    })],
    [ProductCategoryType.GRAPHICS_CARD, this.formBuilder.group({
      productProperties: this.formBuilder.group({
        [ProductPropertyType.MEMORY_COUNT]: [0, [Validators.min(1), Validators.required]],
        [ProductPropertyType.CLOCK_SPEED]: [0, [Validators.min(1), Validators.required]],
      })
    })],
    [ProductCategoryType.HARDWARE, null]
  ]);

  public priceFormControl = new FormControl(0, [Validators.required, Validators.min(1)]);

  public descriptionFormControl = new FormControl('', [Validators.required, Validators.minLength(5)]);

  public longDescriptionFormControl = new FormControl('', [Validators.required, Validators.minLength(15)]);

  public selectedFormGroup: FormGroup | undefined;

  public selectedProductCategory: ProductCategory | undefined;

  public selectedProducerId: number | undefined;

  constructor(private dialogRef: MatDialogRef<ProductManagementAddItemDialogComponent>,
              private productManagementService: ProductManagementService,
              private formBuilder: FormBuilder,
              private snackbar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.productCategories$ = this.productManagementService.getProductCategories();
    this.productProducers$ = this.productManagementService.getProductProducers();
  }

  public handleProductCategoryValueChange($event): void {
    this.selectedProductCategory = $event;
    this.selectedFormGroup = this.productCategoryTypeToFormGroup.get($event.categoryId);
  }

  public submitAddItemForm($event): void {
    $event.preventDefault();
    const formValues = this.selectedFormGroup.getRawValue();

    const product = {
      description: this.descriptionFormControl.value,
      longDescription: this.longDescriptionFormControl.value,
      price: this.priceFormControl.value,
      producer: {
        producerId: this.selectedProducerId
      },
      category: {
        categoryId: this.selectedProductCategory.categoryId,
        categoryType: this.selectedProductCategory.categoryType
      },
      properties: Object.entries(formValues.productProperties).map(([name, value]) => ({
        name,
        value
      }))
    };

    this.productManagementService.addProduct(product).subscribe(() => {
      this.dialogRef.close(true);
      },
      () => {
        this.snackbar.open('Nie udało dodać się produktu', '', {duration: 3000});
      });
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }
}
