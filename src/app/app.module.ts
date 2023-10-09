import { Routes, RouterModule } from '@angular/router';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { MenuModule } from './shared/menu/menu.module';
import { ServiceWorkerModule } from '@angular/service-worker';

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
      import('./components/players/players.module').then(
        (m) => m.PlayersModule
      ),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./components/settings/settings.module').then(
        (m) => m.SettingsModule
      ),
  },
  {
    path: 'team-configuration',
    loadChildren: () =>
      import('./components/team-configuration/team-configuration.module').then(
        (m) => m.TeamConfigurationModule
      ),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    PoModule,
    MenuModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
