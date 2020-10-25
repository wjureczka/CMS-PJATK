import {Component} from '@angular/core';

@Component({
  selector: 'app-credentials-form',
  templateUrl: './credentials-form.component.html',
  styleUrls: ['./credentials-form.component.scss']
})
export class CredentialsFormComponent {

  isPasswordVisible = false;

  visibilityIcon = 'visibility';

  showPassword(): void {
    this.isPasswordVisible = true;
    this.setVisibilityIcon();
  }

  hidePassword(): void {
    this.isPasswordVisible = false;
    this.setVisibilityIcon();
  }

  setVisibilityIcon(): void {
    this.visibilityIcon = this.isPasswordVisible ? 'visibility_off' : 'visibility';
  }

}
