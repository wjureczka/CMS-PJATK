import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import AvailableLanguageCode from 'src/environments/available-languages';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private translateService: TranslateService) {
  }

  public prepareTranslationService(): void {
    const browserLang = this.translateService.getBrowserLang();

    if (browserLang in AvailableLanguageCode) {
      this.translateService.setDefaultLang(browserLang);
    } else {
      this.translateService.setDefaultLang(AvailableLanguageCode.Polish);
    }
  }

  public setLanguage(newLanguageCode: string): void {
    if (newLanguageCode in AvailableLanguageCode) {
      this.translateService.use(newLanguageCode);
    }
  }

  public getAvailableLanguages(): string[] {
    return Object.values(AvailableLanguageCode);
  }
}
