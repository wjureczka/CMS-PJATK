import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../product-management.service';

@Component({
  selector: 'app-product-management-item',
  templateUrl: './product-management-item.component.html',
  styleUrls: ['./product-management-item.component.scss']
})
export class ProductManagementItemComponent implements OnInit {

  @Input() product: Product;

  @Output() productDelete = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

}
