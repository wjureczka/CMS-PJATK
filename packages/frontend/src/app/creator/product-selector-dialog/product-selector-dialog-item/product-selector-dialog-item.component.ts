import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {ProductsService} from '../../../products/services/products.service';
import {CreatorProduct} from '../../creator.service';

@Component({
  selector: 'app-product-selector-dialog-item',
  templateUrl: './product-selector-dialog-item.component.html',
  styleUrls: ['./product-selector-dialog-item.component.scss']
})
export class ProductSelectorDialogItemComponent implements OnInit {

  @Input() product: CreatorProduct;

  @Output() selectedProduct = new EventEmitter();

  public productImageBase64: string;

  constructor(private productsService: ProductsService,
              public domSanitizer: DomSanitizer
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
  }

  public selectProduct(product: CreatorProduct): void {
    this.selectedProduct.emit(product);
  }

}
