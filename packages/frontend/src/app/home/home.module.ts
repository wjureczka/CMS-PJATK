import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [HomeComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        RouterModule,
        TranslateModule,
    ]
})
export class HomeModule { }
