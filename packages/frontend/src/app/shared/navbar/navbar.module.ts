import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from './navbar.component';
import {LanguageSelectorComponent} from './language-selector/language-selector.component';
import {UserMenuComponent} from './user-menu/user-menu.component';

@NgModule({
  declarations: [
    NavbarComponent,
    LanguageSelectorComponent,
    UserMenuComponent
  ],
  exports: [
    LanguageSelectorComponent,
    UserMenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NavbarModule { }
