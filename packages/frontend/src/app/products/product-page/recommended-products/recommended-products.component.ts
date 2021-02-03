import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../shared/product.model';

@Component({
  selector: 'app-recommended-products',
  templateUrl: './recommended-products.component.html',
  styleUrls: ['./recommended-products.component.scss']
})
export class RecommendedProductsComponent implements OnInit {

  @Input() products: Product[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.products);
  }

}
