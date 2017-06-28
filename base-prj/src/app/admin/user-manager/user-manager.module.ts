import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagerRoutingModule,declaredComponents } from './user-manager.routing';

@NgModule({
  imports: [
    CommonModule,
    UserManagerRoutingModule
  ],
  exports:[
    UserManagerRoutingModule
  ],
  declarations: [declaredComponents]
})
export class UserManagerModule { }
