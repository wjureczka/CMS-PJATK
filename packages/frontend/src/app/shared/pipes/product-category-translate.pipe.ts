import {Pipe, PipeTransform} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Pipe({
  name: 'productCategoryTranslate',
  pure: false
})
export class ProductCategoryTranslatePipe implements PipeTransform {

  constructor(private translate: TranslateService) {
  }

  transform(category: string): string {
    return this.translate.instant(`category.${category.toLowerCase()}`);
  }

}
