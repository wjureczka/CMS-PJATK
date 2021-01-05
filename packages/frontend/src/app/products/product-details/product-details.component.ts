import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

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

  constructor() {
  }

  ngOnInit(): void {
  }

}
