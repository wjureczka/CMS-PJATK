import {Component, OnInit, ViewChild} from '@angular/core';
import {MatHorizontalStepper} from '@angular/material/stepper';

@Component({
  selector: 'app-finalize-transaction-page',
  templateUrl: './finalize-transaction-page.component.html',
  styleUrls: ['./finalize-transaction-page.component.scss']
})
export class FinalizeTransactionPageComponent implements OnInit {

  @ViewChild('stepper')
  stepper: MatHorizontalStepper;

  constructor() {
  }

  ngOnInit(): void {
  }

  nextStep(): void {
    console.log(this.stepper.steps);
    this.stepper.next();
  }

  previousStep(): void {
    this.stepper.previous();
  }

}
