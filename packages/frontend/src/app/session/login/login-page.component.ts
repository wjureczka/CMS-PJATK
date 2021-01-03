import {Component, ViewChild} from '@angular/core';
import {CredentialsFormComponent} from '../../shared/forms/credentials-form/credentials-form.component';
import {SessionService} from '../session.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  @ViewChild('form')
  form: CredentialsFormComponent;

  constructor(private sessionService: SessionService, private snackbar: MatSnackBar, private router: Router) {
  }

  login(): void {
    const { email, password } = this.form;

    this.sessionService.login({ email, password }).subscribe(
      () => {
        this.snackbar.open('Zalogowano!');

        this.router.navigate(['products']);
      },
      (() => {
        this.snackbar.open('Ups!');
      })
    );
  }
}
