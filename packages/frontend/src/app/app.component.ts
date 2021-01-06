import {Component} from '@angular/core';
import {LanguageService} from './shared/language.service';
import {AuthService} from './core/auth.service';
import {CartStore} from './core/cart/cart.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private authService: AuthService,
              private cartStore: CartStore,
              private languageService: LanguageService) {
    this.languageService.prepareTranslationService();
    this.authService.loadUser();
  }

}
