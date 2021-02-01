import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {Observable} from 'rxjs';

import {ProductCategory} from '../../../shared/product-category.model';
import {ProductManagementService, ProductProducer, Socket} from '../product-management.service';
import {ProductCategoryType} from '../../../shared/product-category-type.enum';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ProductPropertyType} from '../shared/product-property-type.enum';
import {InputType} from '../shared/input-type.enum';

@Component({
  selector: 'app-product-management-add-item-dialog',
  templateUrl: './product-management-add-item-dialog.component.html',
  styleUrls: ['./product-management-add-item-dialog.component.scss']
})
export class ProductManagementAddItemDialogComponent implements OnInit {

  public productCategoryType = ProductCategoryType;

  public sockets$: Observable<Socket[]>;

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

  public productCategoryTypeToFormGroup: Map<ProductCategoryType, FormGroup> = new Map<ProductCategoryType, FormGroup>([
    [ProductCategoryType.MOTHERBOARD, this.formBuilder.group({})],
    [ProductCategoryType.MEMORY, this.formBuilder.group({
      [ProductPropertyType.MEMORY_CL]: ['', [Validators.minLength(2), Validators.required]],
      [ProductPropertyType.MEMORY_COUNT]: ['', [Validators.min(1), Validators.required]],
    })],
    [ProductCategoryType.PROCESSOR, this.formBuilder.group({
      [ProductPropertyType.CLOCK_SPEED]: ['', [Validators.min(1), Validators.required]],
      [ProductPropertyType.CORE_COUNT]: ['', [Validators.min(1), Validators.required]],
    })],
    [ProductCategoryType.GRAPHICS_CARD, this.formBuilder.group({
      [ProductPropertyType.MEMORY_COUNT]: ['', [Validators.min(1), Validators.required]],
      [ProductPropertyType.CLOCK_SPEED]: ['', [Validators.min(1), Validators.required]],
    })],
    [ProductCategoryType.POWER_SUPPLY, this.formBuilder.group({
      [ProductPropertyType.POWER]: ['', [Validators.min(1), Validators.required]],
    })],
    [ProductCategoryType.COMPUTER_CASE, this.formBuilder.group({
      [ProductPropertyType.CASE_TYPE]: ['', [Validators.minLength(1), Validators.required]],
    })],
    [ProductCategoryType.HARDWARE, null]
  ]);

  public priceFormControl = new FormControl('', [Validators.required, Validators.min(1)]);

  public descriptionFormControl = new FormControl('', [Validators.required, Validators.minLength(5)]);

  public longDescriptionFormControl = new FormControl('', [Validators.required, Validators.minLength(15)]);

  public selectedFormGroup: FormGroup | undefined;

  public selectedProductCategory: ProductCategory | undefined;

  public selectedProducerId: number | undefined;

  public selectedSocketValue: number | undefined;

  constructor(private dialogRef: MatDialogRef<ProductManagementAddItemDialogComponent>,
              private productManagementService: ProductManagementService,
              private formBuilder: FormBuilder,
              private snackbar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.productCategories$ = this.productManagementService.getProductCategories();
    this.productProducers$ = this.productManagementService.getProductProducers();
    this.sockets$ = this.productManagementService.getSockets();
    console.log(this.productCategoryType);
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
      properties: [...Object.entries(formValues).map(([name, value]) => ({
        name,
        value
      }))
      ]
    };

    if (this.selectedProductCategory.categoryId === ProductCategoryType.PROCESSOR || this.selectedProductCategory.categoryId === ProductCategoryType.MOTHERBOARD) {
      product.properties.push(
        {
          name: ProductPropertyType.SOCKET,
          value: this.selectedSocketValue
        }
      );
    }

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
