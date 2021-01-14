import {Component, Input, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ProducerManagementService} from '../producer-management.service';

@Component({
  selector: 'app-producer-management-add-item-dialog',
  templateUrl: './producer-management-add-item-dialog.component.html',
  styleUrls: ['./producer-management-add-item-dialog.component.scss']
})
export class ProducerManagementAddItemDialogComponent implements OnInit {

  public producerNameControl = new FormControl('', [Validators.required, Validators.minLength(1)]);

  constructor(private dialogRef: MatDialogRef<ProducerManagementAddItemDialogComponent>,
              private producerManagementService: ProducerManagementService,
              private snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }

  public onSubmit($event): void {
    $event.preventDefault();

    this.producerManagementService
      .addProducer(this.producerNameControl.value)
      .subscribe(
        (result) => {
          this.dialogRef.close(result);
        },
        (error) => {
          console.log(error);
          this.snackbar.open('Nie udało się dodać producenta', '', { duration: 3000 } );
        }
      );
  }

}
