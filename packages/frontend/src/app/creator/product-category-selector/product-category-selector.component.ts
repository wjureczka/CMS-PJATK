import {Component, Input, OnInit} from '@angular/core';
import {ProductSelectorDialogComponent} from '../product-selector-dialog/product-selector-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-product-category-selector',
  templateUrl: './product-category-selector.component.html',
  styleUrls: ['./product-category-selector.component.scss']
})
export class ProductCategorySelectorComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  @Input() productCategory: string;

  @Input() selectedProduct: object | undefined;

  ngOnInit(): void {
  }

  public openProductSelector(): void {
    const dialogRef = this.dialog.open(ProductSelectorDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }
}
