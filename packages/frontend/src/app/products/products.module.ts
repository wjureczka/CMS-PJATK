import {ProductsComponent} from './products.component';
import {ProductCardComponent} from './product-card/product-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {NgModule} from '@angular/core';
import {ProductCategorySelectComponent} from './product-category-select/product-category-select.component';
import {CommonModule} from '@angular/common';
import {CategoryPipe} from './pipes/category.pipe';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent,
    ProductCategorySelectComponent,
    CategoryPipe
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatButtonModule,
    TranslateModule,
    MatCardModule
  ]
})

export class ProductsModule {
}
