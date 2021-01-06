import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductManagementComponent} from './product-management/product-management.component';
import {AdminComponent} from './admin.component';

const routes: Routes = [{
  path: '',
  component: AdminComponent,
  children: [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'product-management'
    },
    {
      path: 'product-management',
      component: ProductManagementComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
