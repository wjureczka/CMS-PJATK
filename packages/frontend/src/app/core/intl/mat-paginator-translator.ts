import {MatPaginatorIntl} from '@angular/material/paginator';
import {TranslateService} from '@ngx-translate/core';
import {Injectable} from '@angular/core';

@Injectable()
export class MatPaginatorTranslator extends MatPaginatorIntl {

  private rangeLabel: string;

  constructor(private translateService: TranslateService) {
    super();
    this.getTranslations();
  }

  getTranslations(): void {
    this.translateService.stream([
      'paginator.itemsPerPage',
      'paginator.nextPage',
      'paginator.previousPage',
      'paginator.range',
    ])
      .subscribe(translation => {
        this.itemsPerPageLabel = translation['paginator.itemsPerPage'];
        this.nextPageLabel = translation['paginator.nextPage'];
        this.previousPageLabel = translation['paginator.previousPage'];
        this.rangeLabel = translation['paginator.range'];
        this.changes.next();
      });
  }

  getRangeLabel = (page: number, pageSize: number, length: number): string => {
    if (length === 0 || pageSize === 0) {
      return `0 ${this.rangeLabel} ${length}`;
    }

    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ?
      Math.min(startIndex + pageSize, length) :
      startIndex + pageSize;
    return `${startIndex + 1} - ${endIndex} ${this.rangeLabel} ${length}`;
  }

}
