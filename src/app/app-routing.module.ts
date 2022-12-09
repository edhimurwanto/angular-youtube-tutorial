import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { ListUserComponent } from './pages/users/components/list-user/list-user.component';
import { UserDetailsComponent } from './pages/users/components/user-details/user-details.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { PostsComponent } from './pages/posts/posts.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { AuthGuardService } from './shared/guards/auth-guard.service';

const routes: Routes = [
  {
    path: 'beranda', component: PagesComponent
  },
  {
    path: 'users', component: ListUserComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'users/:userId', component: UserDetailsComponent,
    children: [
      {
        path: 'posts',
        component: PostsComponent
      }
    ]
  },
  {
    path: '', redirectTo: '/beranda', pathMatch: 'full'
  },
  {
    path: 'auth/login',
    component: LoginComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  },

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
