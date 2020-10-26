import {Component, ViewChild} from '@angular/core';
import {CredentialsFormComponent} from '../../../shared/forms/credentials-form/credentials-form.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @ViewChild('form')
  form: CredentialsFormComponent;

  constructor() {
  }

  signIn(): void {
  }

}
