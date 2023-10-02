import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalModule } from 'src/app/shared/modal/modal.module';

@NgModule({
  declarations: [TeamComponent],
  exports: [TeamComponent],
  imports: [CommonModule,FontAwesomeModule,ModalModule],
})
export class TeamModule {}
