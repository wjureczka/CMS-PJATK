import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {ProductsService} from '../../../products/services/products.service';
import {CreatorProduct} from '../../creator.service';
import {LanguageService} from "../../../shared/language.service";

@Component({
  selector: 'app-product-selector-dialog-item',
  templateUrl: './product-selector-dialog-item.component.html',
  styleUrls: ['./product-selector-dialog-item.component.scss']
})
export class ProductSelectorDialogItemComponent implements OnInit {

  @Input() product: CreatorProduct;

  @Output() selectedProduct = new EventEmitter();

  public productImageBase64: string;

  public translation: string;

  constructor(private productsService: ProductsService,
              public domSanitizer: DomSanitizer,
              public languageService: LanguageService
  ) {
  }

  ngOnInit(): void {
    this.translation = this.product.translations
      .find((translation) => translation.lang === this.languageService.currentLanguage.value).value;

    this.productsService.getProductImage(this.product.id)
      .subscribe(
        (response) => {
          // @ts-ignore
          this.productImageBase64 = response as string;
        },
        () => {
        }
      );
  }

  public selectProduct(product: CreatorProduct): void {
    this.selectedProduct.emit(product);
  }

}
