import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule, declaredComponents } from './admin.routing';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { UserManagerModule } from './user-manager/user-manager.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    UserManagerModule,
    Angular2FontawesomeModule],
  exports: [
    AdminRoutingModule
  ],
  declarations: [declaredComponents],
  bootstrap:[AdminHomeComponent]
})
export class AdminModule { }