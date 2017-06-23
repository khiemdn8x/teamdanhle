import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    {
        path: 'admin', component: HomeComponent, pathMatch: 'full',
        children: [
             { path: '', redirectTo: './ dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent }
        ]
    }
]
@NgModule({ 
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }

export const adminRoutedComponent = [SidebarComponent, HomeComponent, DashboardComponent];