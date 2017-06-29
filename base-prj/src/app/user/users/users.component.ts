import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:User[];
  selectedUser:User;
  offset:number;
  pageNumber:number;

  constructor(
    private userService:UsersService,
    private router:Router
  ) { }

  ngOnInit() {
    this.offset = 10;
    this.pageNumber = 1;
    users = this.userService.getUsers();
  }

}
