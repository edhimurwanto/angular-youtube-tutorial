import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersModule } from './components/users/users.module';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    UsersModule,
    SharedModule
  ],
  exports: [
    UsersModule,
    PagesComponent
  ]
})
export class PagesModule { }
