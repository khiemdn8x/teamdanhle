import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagerRoutingModule,declaredComponents } from './user-manager.routing';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    UserManagerRoutingModule,
    Angular2FontawesomeModule
  ],
  exports:[
    UserManagerRoutingModule
  ],
  declarations: [declaredComponents]
})
export class UserManagerModule { }
