import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserManagerModule } from './user-manager/user-manager.module';

const routes: Routes = [
    {
        path: '', component: AdminHomeComponent
        ,children:[
            {
                path:'',redirectTo:'./dashboard',pathMatch:'full'
            },
            {
                path:'dashboard',component:DashboardComponent
            },
            {
                path:'usermanager',loadChildren:'./user-manager/user-manager.module#UserManagerModule'
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
AdminHomeComponent
export const declaredComponents = [AdminHomeComponent,SidebarComponent,DashboardComponent];