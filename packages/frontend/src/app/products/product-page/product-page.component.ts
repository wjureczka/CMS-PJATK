import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ListingProduct} from '../model/listing-product.model';
import {ProductsService} from '../services/products.service';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  product$: Observable<ListingProduct>;

  constructor(private productsService: ProductsService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.product$ = this.route.paramMap
      .pipe(
        switchMap(params =>
          this.productsService.getProductById(params.get('productId'))
        )
      );
  }
}
