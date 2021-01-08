import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {RouterModule} from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {ProductsListingCategorySelectComponent} from './products-listing/products-listing-category-select/products-listing-category-select.component';
import {DetailsPanelComponent} from './product-page/product/details-panel/details-panel.component';
import { ProductsListingComponent } from './products-listing/products-listing.component';
import { ProductsListingItemComponent } from './products-listing/products-listing-item/products-listing-item.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductComponent } from './product-page/product/product.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    ProductsListingCategorySelectComponent,
    DetailsPanelComponent,
    ProductsListingComponent,
    ProductsListingItemComponent,
    ProductPageComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCheckboxModule,
    RouterModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    TranslateModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    SharedModule,
  ]
})

export class ProductsModule {
}
