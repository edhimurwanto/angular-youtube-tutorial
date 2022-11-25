import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { ListUserComponent } from './pages/components/users/components/list-user/list-user.component';
import { UserDetailsComponent } from './pages/components/users/components/user-details/user-details.component';

const routes: Routes = [
  {
    path: '', component: PagesComponent
  },
  {
    path: 'users', component: ListUserComponent
  },
  {
    path: 'users/:userId', component: UserDetailsComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
