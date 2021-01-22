import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

import {Product} from '../../../shared/product.model';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

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
}

