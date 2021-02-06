import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

import {Product} from '../../../shared/product.model';
import {ProductsService} from '../../services/products.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {LanguageService} from '../../../shared/language.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  public productImageBase64: string;

  public translatedDescription$: Observable<string>;

  constructor(private productsService: ProductsService,
              public domSanitizer: DomSanitizer,
              private languageService: LanguageService
  ) {
  }

  ngOnInit(): void {
    this.productsService.getProductImage(this.product.id)
      .subscribe(
        (response) => {
          // @ts-ignore
          this.productImageBase64 = response as string;
        },
        () => {
        }
      );

    this.translatedDescription$ = this.languageService.currentLanguage$
      .pipe(
        map(lang => this.product.translations
          .find(translation => translation.lang === lang)?.value
        )
      );
  }

}
