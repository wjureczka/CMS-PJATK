import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-credentials-form',
  templateUrl: './credentials-form.component.html',
  styleUrls: ['./credentials-form.component.scss']
})
export class CredentialsFormComponent implements OnInit {

  @Input() type: 'login' | 'register' = 'login';

  header = 'COMMON';

  button = 'BUTTON';

  isPasswordVisible = false;

  constructor() {
  }

  ngOnInit(): void {
    this.prepareView();
  }

  showPassword(): void {
    this.isPasswordVisible = true;
  }

  hidePassword(): void {
    this.isPasswordVisible = false;
  }

  getPasswordIcon(): string {
    if (this.isPasswordVisible) {
      return 'visibility_off';
    }
    return 'visibility';
  }

  private prepareView(): void {
    switch (this.type) {
      case 'login':
        this.header = `${this.header}.SIGN_IN`;
        this.button = `${this.button}.LOGIN`;
        break;
      case 'register':
        this.header = `${this.header}.REGISTER`;
        this.button = `${this.button}.REGISTER`;
        break;
    }
  }

}
