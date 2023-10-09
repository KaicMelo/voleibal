import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamConfigurationComponent } from './team-configuration.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TeamConfigurationComponent,
  },
];

@NgModule({
  declarations: [
    TeamConfigurationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class TeamConfigurationModule { }
