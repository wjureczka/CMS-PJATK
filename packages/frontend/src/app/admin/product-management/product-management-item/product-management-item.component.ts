import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product, ProductManagementService} from '../product-management.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-management-item',
  templateUrl: './product-management-item.component.html',
  styleUrls: ['./product-management-item.component.scss']
})
export class ProductManagementItemComponent implements OnInit {

  @Input() product: Product;

  @Output() productDelete = new EventEmitter<Product>();

  public isLoading = false;

  constructor(
    private productManagementService: ProductManagementService,
    private snackbar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
  }

  editProduct(): void {

  }

  deleteProduct(): void {
    this.isLoading = true;

    this.productManagementService.deleteProduct(this.product.id)
      .subscribe(
        () => {
          this.productDelete.emit(this.product);
        },
        () => {
          this.snackbar.open('Nie udało się usunąć produktu', '', {duration: 3000});
          this.isLoading = false;
        });
  }

}
