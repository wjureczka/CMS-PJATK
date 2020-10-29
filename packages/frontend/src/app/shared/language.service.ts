import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {availableLanguagesCodes, AvailableLanguageToCode} from 'src/environments/available-languages-codes';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private translateService: TranslateService) {
    translateService.onLangChange.subscribe((event) => {
      this.currentLanguage.next(event.lang);
    });
  }

  public currentLanguage: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public prepareTranslationService(): void {
    const browserLang = this.translateService.getBrowserLang();
    const availableLanguages = this.getAvailableLanguages();

    if (browserLang in availableLanguages) {
      this.translateService.use(browserLang);
    } else {
      this.translateService.use(AvailableLanguageToCode.Polish);
    }
  }

  public setLanguage(newLanguageCode: string): void {
    const availableLanguages = this.getAvailableLanguages();
    const isLanguageAvailable = availableLanguages.includes(newLanguageCode);

    if (isLanguageAvailable) {
      this.translateService.use(newLanguageCode);
    } else {
      console.error(`Language is not available, code: ${newLanguageCode}`);
    }
  }

  public getAvailableLanguages(): string[] {
    return availableLanguagesCodes;
  }
}
