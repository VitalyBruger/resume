import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnketsListComponent } from './ankets-list/ankets-list.component';
import { LoginComponent } from './login/login.component';
import { AnketsEditComponent } from './ankets-edit/ankets-edit.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { AbouttestComponent } from './abouttest/abouttest.component';

const routes: Routes = [
  { path: '', redirectTo: 'aboutme', pathMatch: 'full' },
  { path: 'aboutme', component: AboutmeComponent, pathMatch: 'full', data: { routeIdx: 0 } },
  { path: 'abouttest', component: AbouttestComponent, pathMatch: 'full', data: { routeIdx: 1 } },
  { path: 'ankets', component: AnketsListComponent, pathMatch: 'full', data: { routeIdx: 2 } },
  { path: 'login', component: LoginComponent, pathMatch: 'full', data: { routeIdx: 3 } },
  { path: 'logout', redirectTo: '/aboutme', pathMatch: 'full' },
  { path: 'anketedit/:id', component: AnketsEditComponent, pathMatch: 'full', data: { routeIdx: 4 } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
