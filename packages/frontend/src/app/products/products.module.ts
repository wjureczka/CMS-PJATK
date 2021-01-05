import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {ProductsComponent} from './products.component';
import {ProductsService} from './products.service';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  providers: [
    ProductsService
  ],
  exports: []
})
export class ProductsModule {
}
