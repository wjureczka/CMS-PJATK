import {Component, EventEmitter, Input, Output} from '@angular/core';

export interface PaginatorCfg {
  totalPages: number;
  itemsPerPage: number;
  activePage: number;
}

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {

  @Input() totalPages = 0;

  @Output() pageChange = new EventEmitter<number>();

  activePage = 0;

  pages: number[];

  constructor() {
    this.pages = this.getPagesSlice();
  }

  changePage(pageNumber: number): void {
    if (pageNumber >= 0 && pageNumber <= this.totalPages - 1) {
      this.activePage = pageNumber;
      this.pageChange.emit(pageNumber);
    }
    if (this.activePage === this.pages.length || this.activePage === this.pages[0] - 2) {
      this.pages = this.getPagesSlice();
    }
  }

  getPagesSlice(): number [] {
    const start = this.activePage + 1;
    const range = 4;
    return [...Array(range).keys()].map(i => i + start);
  }

  private getAvailablePages(pagesCount: number): number[] {
    return Array.from({length: pagesCount}, (_, i) => i + 1);
  }

}
