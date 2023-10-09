import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PoTableAction, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'app-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.less'],
})
export class TablePaginationComponent {
  @Input() columns!: Array<PoTableColumn>;
  @Input() items!: Array<any>;
  @Input() loadingTable: boolean = false;
  @Input() totalHits!: number;
  @Input() pageSize!: number;
  @Input() currentPage!: number;
  @Input() isCustomPaginator = false;
  @Input() actions!: Array<PoTableAction>;
  @Input() selectable = false;
  @Output() onChangeCurrentPage = new EventEmitter();
  @Output() onChangePageSize = new EventEmitter();
  @Output() onchangeColumnVisible = new EventEmitter();

  public readonly pageSizeOptions = [
    { label: '20', value: '20' },
    { label: '40', value: '40' },
    { label: '60', value: '60' },
  ];

  public onPageChange({ currentPage }:any) {
    this.currentPage = currentPage;
    this.onChangeCurrentPage.emit({
      currentPage,
      pageSize: this.pageSize,
    });
  }

  public onPageSizeChange({ pageSize, currentPage }:any) {
    this.currentPage = currentPage;
    this.pageSize = pageSize;
    this.onChangePageSize.emit({
      currentPage,
      pageSize,
    });
  }

  changeColumnVisible(event:any): void {
    this.onchangeColumnVisible.emit(event);
  }
}
