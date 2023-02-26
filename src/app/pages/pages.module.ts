import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersModule } from './users/users.module';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { PostsComponent } from './posts/posts.component';
import { LoginComponent } from './auth/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PagesComponent,
    NotfoundComponent,
    PostsComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    UsersModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    UsersModule,
    PagesComponent
  ]
})
export class PagesModule { }
