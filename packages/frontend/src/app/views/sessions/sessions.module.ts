import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginPageComponent} from './login-page/login-page.component';

import {CredentialsFormModule} from '../../shared/forms/credentials-form/credentials-form.module';
import {TranslateModule} from '@ngx-translate/core';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    CredentialsFormModule,
    TranslateModule,
    RouterModule
  ],
  exports: []
})
export class SessionsModule {
}
