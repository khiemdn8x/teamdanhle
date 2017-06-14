import { Component,OnInit } from '@angular/core';
import {UsersService} from 'app/users/users.service';
import {Message} from './message';
@Component({
  selector: 'app-root',
  template:  `
        <router-outlet></router-outlet>
    `,
    providers: [UsersService]
})
export class AppComponent{
}
