import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProductDetailsComponent} from './product-details/product-details.component';

const routes: Routes = [
  {
    path: 'products/:productId',
    component: ProductDetailsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}
