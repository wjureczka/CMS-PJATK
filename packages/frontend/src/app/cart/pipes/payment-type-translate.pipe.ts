import {Pipe, PipeTransform} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Pipe({
  name: 'paymentTypeTranslate',
  pure: false
})
export class PaymentTypeTranslatePipe implements PipeTransform {

  constructor(private translate: TranslateService) {
  }

  transform(category: string): string {
    return this.translate.instant(`cart.finalize.${category.toLowerCase()}`);
  }

}
