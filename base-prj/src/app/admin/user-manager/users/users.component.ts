import { Component, OnInit } from '@angular/core';
import { User } from '../../../bean/user';
import { Page } from '../../../bean/page';
import { UsersService } from '../../../service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css', '../../dataTables.bootstrap.min.css']
})
export class UsersComponent implements OnInit {
  users:User[];
  totalPage:number;
  selectedUser: User;
  limit: number;
  pageNumber: number;

  constructor(
    private userService: UsersService,
  ) { }

  ngOnInit() {
    this.limit = 2;
    this.pageNumber = 0;
    this.userService.getUsers(this.limit*this.pageNumber,this.limit).subscribe(res => {
      this.users = res.rows as User[];
      this.totalPage = res.count;
    });
  }
}
