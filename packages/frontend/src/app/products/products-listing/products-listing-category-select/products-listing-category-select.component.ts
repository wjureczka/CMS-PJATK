import {Component, OnInit, Output, EventEmitter, ViewChild} from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {throwError} from 'rxjs';
import {ProductCategoryType} from '../../../shared/product-category-type.enum';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormArray, FormControl} from '@angular/forms';
import {ProductCategory} from '../../../shared/product-category.model';

@Component({
  selector: 'app-product-category-select',
  templateUrl: './products-listing-category-select.component.html',
  styleUrls: ['./products-listing-category-select.component.scss']
})
export class ProductsListingCategorySelectComponent implements OnInit {

  @Output() categoriesChange = new EventEmitter<ProductCategoryType[]>();

  public categories: ProductCategory[] = [];

  public categoriesFormArray = new FormArray([]);

  constructor(private productService: ProductsService, private snackbar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.productService.getProductCategories()
      .subscribe(
        (result) => {
          this.categories = result;
          this.categories.map((category) => this.categoriesFormArray.push(new FormControl(false)));
        }, (error) => {
          this.snackbar.open('Nie udało się pobrać filtrów', '', {duration: 3000});

          return throwError(error);
        });
  }

  public emitSelectedCategories(): void {
    const activeCategories = this.categoriesFormArray.getRawValue()
      .map((isActive, index) => isActive ? this.categories[index].categoryId : null)
      .filter((isActive) => isActive !== null);
    this.categoriesChange.emit(activeCategories);
  }

}
