import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-products-listing-list-item',
  templateUrl: './products-listing-item.component.html',
  styleUrls: ['./products-listing-item.component.scss']
})
export class ProductsListingItemComponent {

  @Input() id: number;

  @Input() category: string;

  @Input() description: string;

  @Input() price: number;

}
