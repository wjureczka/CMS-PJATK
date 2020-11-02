import {Component, OnInit, ViewChild} from '@angular/core';
import {CredentialsFormComponent} from '../../../shared/forms/credentials-form/credentials-form.component';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  @ViewChild('form')
  form: CredentialsFormComponent;

  constructor() {
  }

  ngOnInit(): void {
  }

  register(): void {
  }

}
