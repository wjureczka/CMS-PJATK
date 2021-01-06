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
import {ProductDetailsComponent} from './product-details/product-details.component';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {DetailsPanelComponent} from './product-details/details-panel/details-panel.component';
import {MatSelectModule} from '@angular/material/select';
import {RouterModule} from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent,
    ProductCategorySelectComponent,
    CategoryPipe,
    ProductDetailsComponent,
    DetailsPanelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCheckboxModule,
    RouterModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatIconModule,
    TranslateModule,
    MatCardModule
  ]
})

export class ProductsModule {
}
