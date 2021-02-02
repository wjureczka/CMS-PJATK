import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {share, switchMap} from 'rxjs/operators';
import {ProductsService} from '../services/products.service';
import {Product} from '../../shared/product.model';
import {ListingProduct} from '../model/listing-product.model';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  public product$: Observable<Product>;

  public recommendedProducts$: Observable<Product[]>;

  constructor(private productsService: ProductsService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.product$ = this.route.paramMap
      .pipe(
        switchMap(params =>
          this.productsService.getProductById(params.get('productId'))
        ),
        share()
      );

    this.recommendedProducts$ = this.product$.pipe(
      switchMap(product => this.productsService.getRecommendedProducts(product.category.categoryId))
    );
  }
}
