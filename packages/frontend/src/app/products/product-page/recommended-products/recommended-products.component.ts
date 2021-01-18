import {Component, Input, OnInit} from '@angular/core';
import {ListingProduct} from '../../model/listing-product.model';

@Component({
  selector: 'app-recommended-products',
  templateUrl: './recommended-products.component.html',
  styleUrls: ['./recommended-products.component.scss']
})
export class RecommendedProductsComponent implements OnInit {

  @Input() products: ListingProduct[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
