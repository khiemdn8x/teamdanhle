import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { User } from './users/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: User[];
  constructor(private usersService: UsersService) { };
  title = 'home';

  ngOnInit(): void {
    // this.usersService.getAll().subscribe(users => this.users = users);
  }
}
