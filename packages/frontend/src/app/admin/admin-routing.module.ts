import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsManagementComponent} from './products-management/products-management.component';
import {AdminComponent} from './admin.component';

const routes: Routes = [{
  path: '',
  component: AdminComponent,
  children: [
    {
      path: 'product-management',
      component: ProductsManagementComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
