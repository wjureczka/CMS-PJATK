import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-products-listing-list-item',
  templateUrl: './products-listing-list-item.component.html',
  styleUrls: ['./products-listing-list-item.component.scss']
})
export class ProductsListingListItemComponent {

  @Input() id: number;

  @Input() category: string;

  @Input() description: string;

  @Input() price: number;

}
