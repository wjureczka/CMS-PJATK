import {Component} from '@angular/core';
import {LanguageService} from './shared/language.service';
import {AuthService} from './core/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private languageService: LanguageService, private authService: AuthService) {
    this.languageService.prepareTranslationService();
    this.authService.loadUser();
  }

}
