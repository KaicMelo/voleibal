import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { RouterModule, Routes } from '@angular/router';
import { PoButtonModule, PoFieldModule } from '@po-ui/ng-components';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
  },
];

@NgModule({
  declarations: [SettingsComponent],
  exports: [SettingsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PoFieldModule,
    ReactiveFormsModule,
    PoButtonModule,
  ],
})
export class SettingsModule {}
