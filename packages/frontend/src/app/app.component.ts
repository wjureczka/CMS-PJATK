import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  languages = ['pl', 'en', 'de'];

  constructor(private translateService: TranslateService) {
    const browserLang = this.translateService.getBrowserLang();
    if (this.languages.includes(browserLang)) {
      this.translateService.setDefaultLang(browserLang);
    } else {
      this.translateService.setDefaultLang('pl');
    }
  }

}
