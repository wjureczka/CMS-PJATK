import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {Observable} from 'rxjs';
import {Category} from '../../model/listing-product.model';

@Component({
  selector: 'app-product-category-select',
  templateUrl: './products-listing-category-select.component.html',
  styleUrls: ['./products-listing-category-select.component.scss']
})
export class ProductsListingCategorySelectComponent implements OnInit {

  public categories$: Observable<Category[]>;

  constructor(private productService: ProductsService) {
  }

  ngOnInit(): void {
    this.categories$ = this.productService.getProductCategories();
  }

}
