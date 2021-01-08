import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ProductCategoryTranslatePipe} from './product-category-translate.pipe';



@NgModule({
  declarations: [ProductCategoryTranslatePipe],
  imports: [
    CommonModule
  ],
  exports: [
    ProductCategoryTranslatePipe
  ]
})
export class SharedModule { }
