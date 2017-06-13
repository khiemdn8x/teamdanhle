import { Injectable } from '@angular/core';
import { Http, Headers,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { credentials } from './credentials';
import { Observable } from 'rxjs/Rx';
import { User } from './users/user';

@Injectable()
export class UsersService {
  constructor(private http: Http) { }

  getAll(): Observable<User[]> {
    return this.http
      .get(`${credentials.host}/api/users`, { headers: credentials.getHeaders() })
      .map(res=>res.json())
      .catch(error => {
        console.log('Error', error);
        return Observable.throw(error);
      });
  }
}

function toUser(res: any): User {
  console.log(res);
  let user = <User>({
    id: res.id,
    username: res.username,
    password: res.password,
    status: res.status,
  })
  console.log('Pased user:', user);
  return user;
}
