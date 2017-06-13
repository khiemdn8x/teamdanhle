import { Component,OnInit } from '@angular/core';
import {UsersService} from './users.service';
import {Message} from './message';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  message: Message;
  constructor(private usersService:UsersService){};
  title = 'app';
  
  ngOnInit(): void {
    this.usersService.getUsers().subscribe(m =>this.message = m);
  }
}
