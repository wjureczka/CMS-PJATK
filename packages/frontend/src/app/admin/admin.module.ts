import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';

import {AdminComponent} from './admin.component';
import {ProductManagementComponent} from './product-management/product-management.component';
import {AdminRoutingModule} from './admin-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ProductManagementItemComponent } from './product-management/product-management-item/product-management-item.component';
import {MatChipsModule} from '@angular/material/chips';


@NgModule({
  declarations: [AdminComponent, ProductManagementComponent, ProductManagementItemComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatTabsModule,
    AdminRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatChipsModule
  ]
})
export class AdminModule {
}
