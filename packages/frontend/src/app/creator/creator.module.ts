import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

import {ProductCategorySelectorComponent} from './product-category-selector/product-category-selector.component';
import {ProductSelectorDialogComponent} from './product-selector-dialog/product-selector-dialog.component';
import {CreatorComponent} from './creator.component';
import {CreatorService} from './creator.service';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [ProductCategorySelectorComponent, ProductSelectorDialogComponent, CreatorComponent],
  imports: [
    SharedModule,
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule
  ],
  providers: [CreatorService],
})
export class CreatorModule {
}
