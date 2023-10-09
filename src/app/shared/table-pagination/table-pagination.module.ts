import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablePaginationComponent } from './table-pagination.component';
import { PoModule, PoTableModule, PoTagModule } from '@po-ui/ng-components';
import { PaginatorModule } from '../paginator/paginator.module';

@NgModule({
  declarations: [TablePaginationComponent],
  exports: [TablePaginationComponent],
  imports: [
    CommonModule,
    PoModule,
    PoTableModule,
    PaginatorModule,
    PoTagModule,
  ],
})
export class TablePaginationModule {}
