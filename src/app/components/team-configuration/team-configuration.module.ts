import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamConfigurationComponent } from './team-configuration.component';
import { RouterModule, Routes } from '@angular/router';
import { PoButtonModule, PoFieldModule, PoModalModule } from '@po-ui/ng-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    PoButtonModule,
    PoFieldModule,
    ReactiveFormsModule,
    FormsModule,
    PoModalModule
  ]
})
export class TeamConfigurationModule { }
