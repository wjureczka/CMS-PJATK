import {Pipe, PipeTransform} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Pipe({
  name: 'category',
  pure: false
})
export class CategoryPipe implements PipeTransform {

  constructor(private translate: TranslateService) {
  }

  transform(category: string): string {
    return this.translate.instant(`category.${category.toLowerCase()}`);
  }

}
