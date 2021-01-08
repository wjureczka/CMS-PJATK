import {Component, Inject, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

import {ProductCategoryType} from '../../../shared/product-category-type.enum';
import {ProductManagementService, ProductProducer} from '../product-management.service';
import {ProductPropertyType} from '../shared/product-property-type.enum';
import {InputType} from '../shared/input-type.enum';
import {Product} from '../../../shared/product.model';

@Component({
  selector: 'app-product-management-edit-item-dialog',
  templateUrl: './product-management-edit-item-dialog.component.html',
  styleUrls: ['./product-management-edit-item-dialog.component.scss']
})
export class ProductManagementEditItemDialogComponent implements OnInit{

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

  constructor(private dialogRef: MatDialogRef<ProductManagementEditItemDialogComponent>,
              private productManagementService: ProductManagementService,
              private formBuilder: FormBuilder,
              private snackbar: MatSnackBar,
              @Inject(MAT_DIALOG_DATA) public product: Product
  ) {
  }

  public ngOnInit(): void{
    this.selectedFormGroup = this.productCategoryTypeToFormGroup.get(this.product.category.categoryId);
  }

  public submitAddItemForm($event): void {
    $event.preventDefault();
    const formValues = this.selectedFormGroup.getRawValue();

    const product = {
      description: this.descriptionFormControl.value,
      longDescription: this.longDescriptionFormControl.value,
      price: this.priceFormControl.value,
      producer: this.product.producer,
      category: this.product.category,
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
