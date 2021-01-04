import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../products.service';
import {Observable} from 'rxjs';
import {Category} from '../model/listing-product.model';

@Component({
  selector: 'app-product-category-select',
  templateUrl: './product-category-select.component.html',
  styleUrls: ['./product-category-select.component.scss']
})
export class ProductCategorySelectComponent implements OnInit {

  public categories$: Observable<Category[]>;

  constructor(private productService: ProductsService) {
  }

  ngOnInit(): void {
    this.categories$ = this.productService.getProductCategories();
  }

}
