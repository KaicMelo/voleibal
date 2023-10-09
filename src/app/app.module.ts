import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { MenuModule } from './shared/menu/menu.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./components/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'players',
    loadChildren: () =>
      import('./components/players/players.module').then((m) => m.PlayersModule),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), HttpClientModule, PoModule, MenuModule,BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
