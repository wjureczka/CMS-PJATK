import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductSelectorDialogComponent} from '../product-selector-dialog/product-selector-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {CreatorProduct, CreatorService} from '../creator.service';
import {ProductCategory} from '../../shared/product-category.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-category-selector',
  templateUrl: './product-category-selector.component.html',
  styleUrls: ['./product-category-selector.component.scss']
})
export class ProductCategorySelectorComponent implements OnInit {

  constructor(private dialog: MatDialog,
              private creatorService: CreatorService) {
  }

  @Input() productCategory: ProductCategory;

  @Output() selectedProduct = new EventEmitter<CreatorProduct | undefined>();

  ngOnInit(): void {
  }

  public openProductSelector(): void {
    this.creatorService.getCompatibleProductsFromCategory(
      {
        categoryId: this.productCategory.categoryId,
        categoryType: this.productCategory.categoryType
      }).subscribe(
      (response) => {
        const dialogRef = this.dialog.open(ProductSelectorDialogComponent, {
          width: '50%',
          height: '80%',
          data: response
        });

        dialogRef.afterClosed().subscribe(result => {
          if (!result) {
            return;
          }

          this.selectedProduct.emit(result);
        });
      }, (error) => {
        console.log(error);
      });
  }
}
