import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule,declaredComponents } from './admin.routing';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule, 
    Angular2FontawesomeModule],
  exports:[
    AdminRoutingModule
  ],
  declarations: [declaredComponents]
})
export class AdminModule { }