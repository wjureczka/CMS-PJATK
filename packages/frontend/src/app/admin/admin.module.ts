import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';

import {AdminComponent} from './admin.component';
import {ProductsManagementComponent} from './products-management/products-management.component';
import {AdminRoutingModule} from './admin-routing.module';


@NgModule({
  declarations: [AdminComponent, ProductsManagementComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatTabsModule,
    AdminRoutingModule
  ]
})
export class AdminModule {
}
