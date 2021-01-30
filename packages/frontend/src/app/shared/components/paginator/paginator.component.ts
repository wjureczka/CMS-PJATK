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

  @Input() config: PaginatorCfg = {
    totalPages: 7,
    itemsPerPage: 10,
    activePage: 0
  };

  @Output() pageChange = new EventEmitter<number>();

  pages: number[];

  constructor() {
  }

  ngOnInit(): void {
    this.pages = this.getAvailablePages(this.config.totalPages);
  }

  changePage(pageNumber: number): void {
    if (pageNumber >= 0 && pageNumber <= this.config.totalPages - 1) {
      this.config.activePage = pageNumber;
      this.pageChange.emit(pageNumber);
    }
  }

 private getAvailablePages(pagesCount: number): number[] {
    return Array.from({length: pagesCount}, (_, i) => i + 1);
  }

}
