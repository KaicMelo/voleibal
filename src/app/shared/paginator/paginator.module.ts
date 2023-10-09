import { FormsModule } from '@angular/forms';
import { PoModule, PoFieldModule } from '@po-ui/ng-components';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PaginatorComponent } from './paginator.component';

@NgModule({
  declarations: [PaginatorComponent],
  exports: [PaginatorComponent],
  imports: [
    CommonModule,
    PoModule,
    PoFieldModule,
    FormsModule,
  ],
})
export class PaginatorModule {}
