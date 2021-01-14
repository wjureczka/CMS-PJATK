import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Producer, ProducerManagementService} from '../producer-management.service';
import {ProductManagementService} from '../../product-management/product-management.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {ProducerManagementAddItemDialogComponent} from '../producer-management-add-item-dialog/producer-management-add-item-dialog.component';
import {ProducerManagementEditItemDialogComponent} from '../producer-management-edit-item-dialog/producer-management-edit-item-dialog.component';

@Component({
  selector: 'app-producer-management-item',
  templateUrl: './producer-management-item.component.html',
  styleUrls: ['./producer-management-item.component.scss']
})
export class ProducerManagementItemComponent implements OnInit {

  @Input() producer: Producer;

  @Output() producerDeleted = new EventEmitter<Producer>();

  @Output() producerEdited = new EventEmitter<Producer>();

  constructor(    private producerManagementService: ProducerManagementService,
                  private snackbar: MatSnackBar,
                  private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public deleteProducer(): void {
    this.producerManagementService.deleteProducer(this.producer.producerId)
      .subscribe(
        () => {
          this.producerDeleted.emit(this.producer);
        },
        (error) => {
          console.error(error);
          this.snackbar.open('Nie udało się usunąć producenta', '', { duration: 3000 });
        }
      );
  }

  public openEditDialog(): void {
    const dialogRef = this.dialog.open(ProducerManagementEditItemDialogComponent, { width: '300px', data: this.producer });

    dialogRef.afterClosed()
      .subscribe((result: Producer) => {
        if (!result) {
          return;
        }

        this.producerEdited.emit(result);
      });
  }
}
