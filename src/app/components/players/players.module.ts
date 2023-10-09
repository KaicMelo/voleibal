import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './players.component';
import { RouterModule, Routes } from '@angular/router';
import { PoButtonModule, PoFieldModule, PoPageModule, PoTableModule } from '@po-ui/ng-components';
import { ReactiveFormsModule } from '@angular/forms';
import { TablePaginationModule } from 'src/app/shared/table-pagination/table-pagination.module';

const routes: Routes = [
  {
    path: '',
    component: PlayersComponent,
  },
];

@NgModule({
  declarations: [PlayersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PoTableModule,
    PoButtonModule,
    PoFieldModule,
    PoPageModule,
    TablePaginationModule,
    ReactiveFormsModule
  ],
})
export class PlayersModule {}
