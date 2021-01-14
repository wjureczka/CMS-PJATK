import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Producer, ProducerManagementService} from '../producer-management.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-producer-management-edit-item-dialog',
  templateUrl: './producer-management-edit-item-dialog.component.html',
  styleUrls: ['./producer-management-edit-item-dialog.component.scss']
})
export class ProducerManagementEditItemDialogComponent implements OnInit {

  public producerNameControl = new FormControl('', [Validators.required, Validators.minLength(1)]);

  constructor(private dialogRef: MatDialogRef<ProducerManagementEditItemDialogComponent>,
              private producerManagementService: ProducerManagementService,
              private snackbar: MatSnackBar,
              @Inject(MAT_DIALOG_DATA) private producer: Producer
  ) {
  }

  ngOnInit(): void {
    this.producerNameControl.setValue(this.producer.producerName);
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }

  public onSubmit($event): void {
    $event.preventDefault();

    const editedProducer: Producer = {...this.producer, producerName: this.producerNameControl.value};

    this.producerManagementService
      .editProducer(editedProducer)
      .subscribe(
        () => {
          this.dialogRef.close(editedProducer);
        },
        (error) => {
          console.log(error);
          this.snackbar.open('Nie udało się edytować producenta', '', {duration: 3000});
        }
      );
  }

}
