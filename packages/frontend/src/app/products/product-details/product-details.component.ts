import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../services/products.service';
import {Observable} from 'rxjs';
import {ListingProduct} from '../model/listing-product.model';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  dataSource = [
    {key: 'key', value: 'value'},
    {key: 'key', value: 'value'},
    {key: 'key', value: 'value'},
    {key: 'key', value: 'value'},
    {key: 'key', value: 'value'},
    {key: 'key', value: 'value'},
    {key: 'key', value: 'value'},
    {key: 'key', value: 'value'},
    {key: 'key', value: 'value'},
    {key: 'key', value: 'value'},
  ];

  displayedColumns = ['1', '2'];

  details$: Observable<ListingProduct>;

  constructor(private productsService: ProductsService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.details$ = this.route.paramMap
      .pipe(
        switchMap(params =>
          this.productsService.getProductById(params.get('productId'))
        )
      );
  }

}
