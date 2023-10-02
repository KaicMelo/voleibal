import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [TeamComponent],
  exports: [TeamComponent],
  imports: [CommonModule,FontAwesomeModule],
})
export class TeamModule {}
