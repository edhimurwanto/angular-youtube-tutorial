import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './components/list-user/list-user.component';
import UserService from './service/user.service';
import { UserDetailsComponent } from './components/user-details/user-details.component';



@NgModule({
  declarations: [
    ListUserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListUserComponent
  ],
})
export class UsersModule { }
