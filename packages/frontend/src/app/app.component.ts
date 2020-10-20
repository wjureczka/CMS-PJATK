import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import AvailableLanguageCode from 'src/environments/available-languages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private translateService: TranslateService) {
    this.prepareTranslationService();
  }

  private prepareTranslationService(): void {
    const browserLang = this.translateService.getBrowserLang();

    if (browserLang in AvailableLanguageCode) {
      this.translateService.setDefaultLang(browserLang);
    } else {
      this.translateService.setDefaultLang(AvailableLanguageCode.Polish);
    }
  }
}
