import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  {
    path: 'users', component:UsersComponent
  },
  {
    path: 'user',component: UserComponent
  },
  {
    path: 'user/:id',component: UserDetailComponent
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

export const routedComponents = [UserComponent,UsersComponent,UserDetailComponent];