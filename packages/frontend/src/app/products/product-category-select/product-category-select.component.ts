import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../products.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-category-select',
  templateUrl: './product-category-select.component.html',
  styleUrls: ['./product-category-select.component.scss']
})
export class ProductCategorySelectComponent implements OnInit {

  public categories$: Observable<string[]>;

  constructor(private productService: ProductsService) {
  }

  ngOnInit(): void {
    this.categories$ = this.productService.getProductCategories();
  }

}
