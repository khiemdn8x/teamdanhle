import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from '../users/users-list.component';
// import { PersonDetailsComponent } from './person-details.component';

const routes: Routes = [
    {
        path: 'users',
        component: UserListComponent
    },
    // {
    //     path: 'persons/:id',
    //     component: PersonDetailsComponent
    // },
    {
        path: '',
        redirectTo: '/user',
        pathMatch: 'full'
    }
];

export const routing = RouterModule.forRoot(routes);
