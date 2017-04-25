import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddVideoComponent } from './add-video/add-video.component'
import { UsersComponent } from './users/users.component'

const routes: Routes = [
  { path: '', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: 'add', component: AddVideoComponent },
  { path: 'users', component: UsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
