import { NgModule } from '@angular/core';
import { AdminRoutingModule,adminRoutedComponent } from './admin.routing';
import {Angular2FontawesomeModule} from 'angular2-fontawesome/angular2-fontawesome';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [AdminRoutingModule,Angular2FontawesomeModule],
  exports: [AdminRoutingModule],
  declarations:[adminRoutedComponent, DashboardComponent]
})
export class AdminModule { }