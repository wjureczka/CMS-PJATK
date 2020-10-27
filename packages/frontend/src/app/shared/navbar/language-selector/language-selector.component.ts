import {Component, OnInit} from '@angular/core';
import {LanguageService} from 'src/app/shared/language.service';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {

  public availableLanguages: string[];

  constructor(public languageService: LanguageService) {
    this.availableLanguages = languageService.getAvailableLanguages();
  }

  ngOnInit(): void {
  }
}
