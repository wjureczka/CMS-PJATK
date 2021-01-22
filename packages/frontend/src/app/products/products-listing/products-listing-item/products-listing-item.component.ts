import {Component, Input, OnInit} from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-products-listing-list-item',
  templateUrl: './products-listing-item.component.html',
  styleUrls: ['./products-listing-item.component.scss']
})
export class ProductsListingItemComponent implements OnInit {

  @Input() id: number;

  @Input() category: string;

  @Input() description: string;

  @Input() producer: string;

  @Input() price: number;

  public productImageBase64: string;

  constructor(private productsService: ProductsService,
              public domSanitizer: DomSanitizer
  ) {
  }

  ngOnInit(): void {
    this.productsService.getProductImage(this.id)
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
