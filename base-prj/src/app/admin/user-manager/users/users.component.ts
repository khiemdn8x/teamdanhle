import { Component, OnInit } from '@angular/core';
import { User } from '../../../bean/user';
import { Pagination } from '../../../bean/pagination';
import { UsersService } from '../../../service/users.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css', '../../dataTables.bootstrap.min.css']
})
export class UsersComponent implements OnInit {
  private users: User[];
  private pagination: Pagination;
  private limit: number;
  private currentPage: number;

  constructor(
    private userService: UsersService,
  ) { }

  ngOnInit() {
    this.limit = 10;
    this.currentPage = 1;
    this.pagination = new Pagination(1, this.currentPage, this.limit);
    this.changePage(this.currentPage);
  }

  changePage(page: number) {
    if (page < 1 || page > this.pagination.totalPages) {
      return;
    }
    this.currentPage = page;
    this.userService.getUsers(this.limit * (this.currentPage - 1), this.limit).subscribe(res => {
        this.users = res.rows as User[];
        this.pagination = new Pagination(res.count, this.currentPage, this.limit);
      });
  }
}
