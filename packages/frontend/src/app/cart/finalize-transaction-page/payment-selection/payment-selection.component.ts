import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-payment-selection',
  templateUrl: './payment-selection.component.html',
  styleUrls: ['./payment-selection.component.scss']
})
export class PaymentSelectionComponent implements OnInit {

  form: FormGroup;

  get paymentMethod(): string {
    return this.form.get('paymentType').value as string;
  }

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      paymentType: 'BLIK'
    });
  }

  getActiveClassIfChecked(controlValue: string): { active: boolean } {
    const selected = this.paymentMethod;
    return {active: selected === controlValue};
  }

}
