import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

import {ProductSelectorDialogComponent} from '../product-selector-dialog/product-selector-dialog.component';
import {CreatorProduct, CreatorService} from '../creator.service';
import {ProductCategory} from '../../shared/product-category.model';
import {ProductsService} from '../../products/services/products.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-product-category-selector',
  templateUrl: './product-category-selector.component.html',
  styleUrls: ['./product-category-selector.component.scss']
})
export class ProductCategorySelectorComponent implements OnInit {

  constructor(private dialog: MatDialog,
              private snackbar: MatSnackBar,
              private creatorService: CreatorService,
              private productsService: ProductsService,
              public domSanitizer: DomSanitizer) {
  }

  @Input() productCategory: ProductCategory;

  @Input() productCategoryImageURL: string;

  @Output() selectedProduct = new EventEmitter<CreatorProduct | undefined>();

  public productImageBase64: string;

  ngOnInit(): void {
  }

  public openProductSelector(): void {
    this.creatorService.getCompatibleProductsFromCategory(
      {
        categoryId: this.productCategory.categoryId,
        categoryType: this.productCategory.categoryType
      }).subscribe(
      (response) => {
        if (response.length === 0) {
          this.snackbar.open('Brak produktów', '', { duration: 3000 });
          return;
        }


        const dialogRef = this.dialog.open(ProductSelectorDialogComponent, {
          width: '50%',
          height: '80%',
          data: response
        });

        dialogRef.afterClosed().subscribe(product => {
          if (!product) {
            return;
          }

          this.selectedProduct.emit(product);
          this.getProductImage(product.id);
        });
      }, (error) => {
        console.log(error);
      });
  }

  private getProductImage(productId: number): void {
    this.productsService.getProductImage(productId)
      .subscribe(
        (response) => {
          // @ts-ignore
          this.productImageBase64 = response as string;
        },
        () => {
        }
      );
  }
}
