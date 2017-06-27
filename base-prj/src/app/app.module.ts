import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { RouterModule,Routes } from '@angular/router';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { HomeComponent } from './admin/home/home.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UserManagerComponent } from './admin/user-manager/user-manager.component';

const routes:Routes=[
  {
    path:'',component:AppComponent,
  },
  {
    path:'admin',loadChildren:'./admin/admin.module#AdminModule'
  }
]
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UserModule,
    AdminModule,
    RouterModule.forRoot(routes),
    Angular2FontawesomeModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }