import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'app-paginator',
  templateUrl: 'paginator.component.html',
  styleUrls: ['./paginator.component.less'],
})
export class PaginatorComponent implements OnChanges {
  @Output() onPageChange = new EventEmitter();
  @Output() onPageSizeChange = new EventEmitter();
  @Input() totalHits!: number;
  @Input() countHits!: number;
  @Input() currentPage!: number;
  @Input() pageSize!: number;
  @Input() panelContainer!: boolean;
  @Input() pageSizeOptions!: PoSelectOption[];

  lastPage!: number;
  initalIndexPage!: number;
  totalPageSize!: number;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['totalHits']) {
      const totalHits: number = changes['totalHits'].currentValue;

      if (totalHits) {
        this.initalIndexPage = 1;

        if (totalHits % this.pageSize === 0) {
          this.lastPage = Math.floor(totalHits / this.pageSize);
        } else {
          this.lastPage = Math.floor(totalHits / this.pageSize) + 1;
        }
      } else {
        this.initalIndexPage = 0;
        this.lastPage = 1;
      }

      this.totalPageSize = this.countHits;
    }

    if (changes['pageSize']) {
      this.initalIndexPage = 1;

      if (this.totalHits % this.pageSize === 0) {
        this.lastPage = Math.floor(this.totalHits / this.pageSize);
      } else {
        this.lastPage = Math.floor(this.totalHits / this.pageSize) + 1;
      }

      this.totalPageSize = this.pageSize;
    }
  }

  goToNextPage() {
    this.setPage(this.currentPage + 1);
  }

  goToPreviousPage() {
    this.setPage(this.currentPage - 1);
  }

  goToFirstPage() {
    if (this.currentPage === 1) {
      return;
    }
    this.setPage(1);
  }

  goToLastPage() {
    if (this.currentPage === this.lastPage) {
      return;
    }
    this.setPage(this.lastPage);
  }

  pageSizeChanged(page: any) {
    this.onPageSizeChange.emit({ pageSize: Number(page), currentPage: 1 });
  }

  setPage(page: any) {
    if (!page) {
      page = 1;
    }

    if (page !== this.currentPage) {
      if (page > this.lastPage) {
        this.currentPage = this.lastPage;
      } else {
        this.currentPage = page;
      }

      this.onPageChange.emit({
        pageSize: Number(this.pageSize),
        currentPage: this.currentPage,
      });
    }

    if (this.currentPage === 1) {
      this.initalIndexPage = this.currentPage;
      this.totalPageSize = this.pageSize;
    } else {
      this.initalIndexPage = (this.currentPage - 1) * this.pageSize + 1;
      this.totalPageSize = this.pageSize * this.currentPage;

      if (this.currentPage >= this.lastPage) {
        this.totalPageSize = this.totalHits;
      }
    }
  }

  eventHandler(event: any) {
    if (event.keyCode === 13) {
      if (event.target.value) {
        this.setPage(event.target.value);
      }
    }
  }
}
