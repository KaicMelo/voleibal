import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { PoModalModule, PoModule } from '@po-ui/ng-components';

@NgModule({
  declarations: [ModalComponent],
  exports: [ModalComponent],
  imports: [CommonModule, PoModule, PoModalModule],
})
export class ModalModule {}
