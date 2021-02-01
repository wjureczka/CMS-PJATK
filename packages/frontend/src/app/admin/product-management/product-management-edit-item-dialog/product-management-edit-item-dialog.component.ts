import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

import {ProductCategoryType} from '../../../shared/product-category-type.enum';
import {ProductManagementService, Socket} from '../product-management.service';
import {ProductPropertyType} from '../shared/product-property-type.enum';
import {InputType} from '../shared/input-type.enum';
import {Product} from '../../../shared/product.model';

@Component({
  selector: 'app-product-management-edit-item-dialog',
  templateUrl: './product-management-edit-item-dialog.component.html',
  styleUrls: ['./product-management-edit-item-dialog.component.scss']
})
export class ProductManagementEditItemDialogComponent implements OnInit {

  public productCategoryType = ProductCategoryType;

  public sockets: Socket[] = [];

  constructor(private dialogRef: MatDialogRef<ProductManagementEditItemDialogComponent>,
              private productManagementService: ProductManagementService,
              private formBuilder: FormBuilder,
              private snackbar: MatSnackBar,
              @Inject(MAT_DIALOG_DATA) public product: Product
  ) {
  }

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
    [ProductCategoryType.MOTHERBOARD, this.formBuilder.group({
    })],
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

  public priceFormControl = new FormControl(0, [Validators.required, Validators.min(1)]);

  public descriptionFormControl = new FormControl('', [Validators.required, Validators.minLength(5)]);

  public longDescriptionFormControl = new FormControl('', [Validators.required, Validators.minLength(15)]);

  public selectedFormGroup: FormGroup | undefined;

  public selectedSocketFormControl = new FormControl('', [Validators.required]);

  public async ngOnInit() {
    this.productManagementService.getSockets()
      .subscribe((sockets) => {
        this.sockets = sockets;
      }, (error) => {
        console.error(error);
      });
    this.selectedFormGroup = await this.productCategoryTypeToFormGroup.get(this.product.category.categoryId);
    this.setCurrentValues();
  }

  public submitEditItemForm($event): void {
    $event.preventDefault();
    const formValues: [string, string] = this.selectedFormGroup.getRawValue();

    const product: Product = {
      id: this.product.id,
      description: this.descriptionFormControl.value,
      longDescription: this.longDescriptionFormControl.value,
      price: this.priceFormControl.value,
      producer: this.product.producer,
      category: this.product.category,
      properties: Object.entries(formValues).map(([name, value]) => ({
        id: this.product.properties.find((property) => property.name === name).id,
        name,
        value
      }))
    };

    if (this.product.category.categoryId === ProductCategoryType.PROCESSOR
      || this.product.category.categoryId === ProductCategoryType.MOTHERBOARD) {
      const socket = this.sockets.find((sckt) => sckt.value === this.selectedSocketFormControl.value);

      product.properties.push(
        {
          id: socket.id,
          name: ProductPropertyType.SOCKET,
          value: socket.value
        }
      );
    }


    this.productManagementService.editProduct(product).subscribe(() => {
        this.dialogRef.close(product);
      },
      () => {
        this.snackbar.open('Nie udało dodać się produktu', '', {duration: 3000});
      });
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }

  private setCurrentValues(): void {
    const controls = this.selectedFormGroup.controls;

    Object.entries(controls).forEach(([key, value]) => {
      value.setValue(this.getPropertyValue(key));
    });

    this.priceFormControl.setValue(this.product.price);
    this.descriptionFormControl.setValue(this.product.description);
    this.longDescriptionFormControl.setValue(this.product.longDescription);
    this.selectedSocketFormControl.setValue(this.product.properties.find((property) => property.name === ProductPropertyType.SOCKET).value);
  }

  private getPropertyValue(propertyType: string): string | number {
    const {value} = this.product.properties.find(({name}) => name === propertyType);

    return value;
  }
}
