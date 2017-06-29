import { Component, OnInit } from '@angular/core';
import {User} from '../../../bean/user';
import {UsersService} from '../../../service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css','../../dataTables.bootstrap.min.css']
})
export class UsersComponent implements OnInit {
users:User[];
  selectedUser:User;
  offset:number;
  pageNumber:number;

  constructor(
    private userService:UsersService,
  ) { }

  ngOnInit() {
    this.offset = 10;
    this.pageNumber = 1;
    this.userService.getUsers().subscribe(u=>this.users = u);
  }
}
