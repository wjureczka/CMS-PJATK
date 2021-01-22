import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

import {AdminComponent} from './admin.component';
import {ProductManagementComponent} from './product-management/product-management.component';
import {AdminRoutingModule} from './admin-routing.module';
import {ProductManagementItemComponent} from './product-management/product-management-item/product-management-item.component';
import {ProductManagementAddItemDialogComponent} from './product-management/product-management-add-item-dialog/product-management-add-item-dialog.component';
import {SharedModule} from '../shared/shared.module';
import {ProductManagementEditItemDialogComponent} from './product-management/product-management-edit-item-dialog/product-management-edit-item-dialog.component';
import {ProducerManagementComponent} from './producer-management/producer-management.component';
import {ProducerManagementItemComponent} from './producer-management/producer-management-item/producer-management-item.component';
import { ProducerManagementAddItemDialogComponent } from './producer-management/producer-management-add-item-dialog/producer-management-add-item-dialog.component';
import { ProducerManagementEditItemDialogComponent } from './producer-management/producer-management-edit-item-dialog/producer-management-edit-item-dialog.component';
import {TranslateModule} from "@ngx-translate/core";
import { ProductManagementImageItemDialogComponent } from './product-management/product-management-image-item-dialog/product-management-image-item-dialog.component';


@NgModule({
  declarations: [
    AdminComponent,
    ProductManagementComponent,
    ProductManagementItemComponent,
    ProductManagementAddItemDialogComponent,
    ProductManagementEditItemDialogComponent,
    ProducerManagementComponent,
    ProducerManagementItemComponent,
    ProducerManagementAddItemDialogComponent,
    ProducerManagementEditItemDialogComponent,
    ProductManagementImageItemDialogComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        MatTabsModule,
        AdminRoutingModule,
        MatTableModule,
        MatButtonModule,
        MatListModule,
        MatProgressSpinnerModule,
        MatChipsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatSelectModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        TranslateModule
    ]
})
export class AdminModule {
}
