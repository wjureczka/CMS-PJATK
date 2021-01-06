import {Component, Input, OnInit} from '@angular/core';
import {ListingProduct} from '../../model/listing-product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

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

  @Input() product: ListingProduct;
}
