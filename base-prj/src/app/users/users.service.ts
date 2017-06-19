import { Injectable } from '@angular/core';
import { Http,Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {credentials} from '../credentials';
import {Observable} from 'rxjs/Rx';
import {Message} from '../message';
import { User} from './user';
@Injectable()
export class UsersService {
  constructor(private http:Http) { }

  getUsers():Observable<User[]>{
    return this.http
          .get(`${credentials.host}/api/users`,{headers:credentials.getHeaders()})
          .map(res => res.json())
          .catch(handleError);
  }

  get(id: number): Observable<User> {
        let user = this.http
        .get(`${credentials.host}/api/users/${id}`, {headers: credentials.getHeaders()})
        .map(res => res.json())
        .catch(handleError);
        return user;
    }

  delete(id: number): Observable<User> {
        return this.http
        .delete(`${credentials.host}/api/users/${id}`, {headers: credentials.getHeaders()})
        .map(res => res.json())
        .catch(handleError);
  }

  save(user: User) : Observable<Response>{
      return this
      .http
      .put(`${credentials.host}/api/users/${user.id}`, 
              JSON.stringify(user), 
              {headers: credentials.getHeaders()});
  }

}

function mapUsers(response:Response): User[]{
   return response.json()[0].results.map(toUser);
}

function mapUser(response:Response): User{
   return toUser(response.json());
}

function toUser(r: any): User{
    let user = <User>({
    id: extractId(r),
    url: r.url,
    username: r.username,
    password: r.password,
    status: r.status
  });
  return user;
}

function extractId(userData: any){
    let extractId = userData.url.replace('http://localhost:3000/api/users/','').replace('/','');
    return parseInt(extractId);
}

function toMessage(r:any):Message{
  let message = <Message>({
    message : r.message
  })
  console.log('Pased message:',message);
  return message;
}

function handleError (error: any) {
  let errorMsg = error.message || `Yikes! There was was a problem with our hyperdrive device and we couldn't retrieve your data!`
  console.error(errorMsg);
  return Observable.throw(errorMsg);
}