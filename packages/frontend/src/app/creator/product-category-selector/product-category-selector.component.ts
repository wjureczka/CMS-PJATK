import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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

  @Output() selectedProduct = new EventEmitter<object | undefined>();

  ngOnInit(): void {
  }

  public openProductSelector(): void {
    const dialogRef = this.dialog.open(ProductSelectorDialogComponent, {
      width: '50%',
      height: '80%'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.selectedProduct.emit(result);
      }
    });
  }
}
