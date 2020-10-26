import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SessionsRoutingModule} from './sessions-routing.module';
import {CredentialsFormComponent} from '../../shared/forms/credentials-form/credentials-form.component';
import {LoginComponent} from './login/login.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

import {TranslateModule} from '@ngx-translate/core';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    CredentialsFormComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    SessionsRoutingModule,
    TranslateModule
  ],
  exports: []
})
export class SessionsModule {
}
