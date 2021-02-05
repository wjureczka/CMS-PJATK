import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {PaymentType} from '../../model/payment-type.enum';

@Component({
  selector: 'app-payment-selection',
  templateUrl: './payment-selection.component.html',
  styleUrls: ['./payment-selection.component.scss']
})
export class PaymentSelectionComponent implements OnInit {

  public form: FormGroup;

  public paymentType = PaymentType;

  get paymentMethod(): string {
    return this.form.get('paymentType').value as string;
  }

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      paymentType: this.paymentType.BLIK
    });
  }

  getActiveClassIfChecked(controlValue: string): { active: boolean } {
    const selected = this.paymentMethod;
    return {active: selected === controlValue};
  }

}
