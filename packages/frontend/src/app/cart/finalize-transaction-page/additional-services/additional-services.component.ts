import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-additional-services',
  templateUrl: './additional-services.component.html',
  styleUrls: ['./additional-services.component.scss']
})
export class AdditionalServicesComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  get checkedServices(): string[] {
    const checkedServices = [];
    const keys = Object.keys(this.form.value);

    keys.forEach(key => {
      const isControlChecked = this.form.get(key).value;
      if (isControlChecked) {
        checkedServices.push(key);
      }
    });

    return checkedServices;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      computerAssembly: false,
      extendedWarranty: false,
      expressShipping: false
    });
  }

}
