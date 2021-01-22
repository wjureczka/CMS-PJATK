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
import {TranslateModule} from "@ngx-translate/core";
import { ProductSelectorDialogItemComponent } from './product-selector-dialog/product-selector-dialog-item/product-selector-dialog-item.component';


@NgModule({
  declarations: [ProductCategorySelectorComponent, ProductSelectorDialogComponent, CreatorComponent, ProductSelectorDialogItemComponent],
    imports: [
        SharedModule,
        CommonModule,
        MatButtonModule,
        MatDialogModule,
        MatDividerModule,
        TranslateModule
    ],
  providers: [CreatorService],
})
export class CreatorModule {
}
