import { NgModule } from '@angular/core';
import { AdminRoutingModule,adminRoutedComponent } from './admin.routing';
import {Angular2FontawesomeModule} from 'angular2-fontawesome/angular2-fontawesome';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserManagerComponent } from './user-manager/user-manager.component';

@NgModule({
  imports: [AdminRoutingModule,Angular2FontawesomeModule],
  exports: [AdminRoutingModule],
  declarations:[adminRoutedComponent, DashboardComponent, UserManagerComponent]
})
export class AdminModule { }