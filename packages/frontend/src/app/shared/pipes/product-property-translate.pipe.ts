import {Pipe, PipeTransform} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Pipe({
  name: 'productPropertyTranslate',
  pure: false
})
export class ProductPropertyTranslatePipe implements PipeTransform {

  constructor(private translate: TranslateService) {
  }

  transform(category: string): string {
    return this.translate.instant(`product.property.${category.toLowerCase()}`);
  }

}
