import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ProductCategoryTranslatePipe} from './pipes/product-category-translate.pipe';
import { ProductPropertyTranslatePipe } from './pipes/product-property-translate.pipe';



@NgModule({
  declarations: [ProductCategoryTranslatePipe, ProductPropertyTranslatePipe],
  imports: [
    CommonModule
  ],
  exports: [
    ProductCategoryTranslatePipe,
    ProductPropertyTranslatePipe
  ]
})
export class SharedModule { }
