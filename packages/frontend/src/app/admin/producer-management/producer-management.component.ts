import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

import {Producer, ProducerManagementService} from './producer-management.service';
import {ProducerManagementAddItemDialogComponent} from './producer-management-add-item-dialog/producer-management-add-item-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {Product} from "../../shared/product.model";

@Component({
  selector: 'app-producer-management',
  templateUrl: './producer-management.component.html',
  styleUrls: ['./producer-management.component.scss']
})
export class ProducerManagementComponent implements OnInit {

  public isLoading = true;

  public producers: Producer[] = [];

  constructor(private producerManagementService: ProducerManagementService,
              private snackbar: MatSnackBar,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getProducers();
  }

  public getProducers(): void {
    this.producerManagementService.getProducers()
      .subscribe(
        (result) => {
          this.producers = result;
          this.isLoading = false;
        },
        (error) => {
          console.error(error);
          this.snackbar.open('Nie udało się pobrać producentów');
        }
      );
  }

  public openAddProducerDialog(): void {
    const dialogRef = this.dialog.open(ProducerManagementAddItemDialogComponent, {width: '300px'});

    dialogRef.afterClosed().subscribe((result: Producer) => {
      if (!result) {
        return;
      }

      this.producers.unshift(result);
    });
  }

  public handleProducerDelete(deletedProducer: Producer): void {
    this.producers = this.producers.filter((producer) => producer.producerId !== deletedProducer.producerId);
  }

  public handleProducerEdit(editedProducer: Producer): void {
    let indexToEdit;

    const producerFound = this.producers.find((producer, index) => {
      if (producer.producerId === editedProducer.producerId) {
        indexToEdit = index;
        return true;
      }

      return false;
    });

    this.producers.splice(indexToEdit, 1, editedProducer);
  }
}
