import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {Observable} from 'rxjs';
import {ProductCategory} from "../../../shared/product-category.model";

@Component({
  selector: 'app-product-category-select',
  templateUrl: './products-listing-category-select.component.html',
  styleUrls: ['./products-listing-category-select.component.scss']
})
export class ProductsListingCategorySelectComponent implements OnInit {

  public categories$: Observable<ProductCategory[]>;

  constructor(private productService: ProductsService) {
  }

  ngOnInit(): void {
    this.categories$ = this.productService.getProductCategories();
  }

}
