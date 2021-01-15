import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-payment-selection',
  templateUrl: './payment-selection.component.html',
  styleUrls: ['./payment-selection.component.scss']
})
export class PaymentSelectionComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      paymentType: 'BLIK'
    });
  }

  getActiveClassIfChecked(controlValue: string): { active: boolean } {
    const selected = this.form.get('paymentType').value as string;
    return {active: selected === controlValue};
  }

}
