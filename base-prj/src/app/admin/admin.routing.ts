import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserManagerComponent } from './user-manager/user-manager.component';

const routes: Routes = [
    {
        path: '', component: HomeComponent,children:[
            {
                path:'',redirectTo:'./dashboard',pathMatch:'full'
            },
            {
                path:'dashboard',component:DashboardComponent
            },
            {
                path:'usermanager',component:UserManagerComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }

export const declaredComponents = [HomeComponent,SidebarComponent,DashboardComponent,UserManagerComponent];