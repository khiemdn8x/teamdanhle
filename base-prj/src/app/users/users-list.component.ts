import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users-list.component.html',
  styleUrls: ['../styles/styles.css']
})
export class UserListComponent implements OnInit {
    user: User[] = [];
    errorMessage: string = '';
    isLoading: boolean = true;
    constructor(private usersService : UsersService){
    }

    ngOnInit(){
       this.getAllUsers();
    }

    getAllUsers(){
      this.usersService
      .getUsers()
      .subscribe(
         /* happy path */ u => this.user = u,
         /* error path */ e => this.errorMessage = e,
         /* onCompleted */ () => this.isLoading = false);
    }

    deleteUser(id){
      this.usersService.deleteAndGetAll(id).subscribe(
        user => this.user = user,
        error => this.errorMessage = error);
    }

    editUser(id) {
      alert('Đã chon id '+id+' nhưng hưa làm xong, hê hê!');
    }

}
