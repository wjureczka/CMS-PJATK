import {ProductsComponent} from './products.component';
import {ProductCardComponent} from './product-card/product-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {NgModule} from '@angular/core';
import {ProductCategorySelectComponent} from './product-category-select/product-category-select.component';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent,
    ProductCategorySelectComponent,
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule
  ]
})

export class ProductsModule {
}
