import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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
export class PaginatorComponent implements OnInit {

  @Input() totalPages = 0;

  @Output() pageChange = new EventEmitter<number>();

  private maxRange = 4;

  public activePage = 0;

  public pages: number[];

  public pageSlice: number[];

  constructor() {
  }

  ngOnInit(): void {
    this.pages = this.getAvailablePages(this.totalPages);
    this.pageSlice = this.getPagesSlice(1);
  }

  nextPage(pageNumber: number): void {
    this.changePage(pageNumber);
    if (this.activePage < this.totalPages  && this.activePage === this.pageSlice[this.pageSlice.length - 1]) {
      this.pageSlice = this.pageSlice.map(val => val + 1);
    }
  }

  previousPage(pageNumber: number): void {
    this.changePage(pageNumber);
    if (this.activePage - 1 >= 0 && this.activePage === this.pageSlice[0] - 1) {
      this.pageSlice = this.pageSlice.map(val => val - 1);
    }
  }

  private changePage(pageNumber: number): void {
    if (pageNumber >= 0 && pageNumber <= this.totalPages - 1) {
      this.activePage = pageNumber;
      this.pageChange.emit(pageNumber);
    }
  }

  private getPagesSlice(start: number): number [] {
    return [...Array(this.maxRange).keys()].map(i => i + start);
  }

  private getAvailablePages(pagesCount: number): number[] {
    return Array.from({length: pagesCount}, (_, i) => i + 1);
  }

}
