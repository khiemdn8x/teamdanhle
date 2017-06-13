import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {credentials} from './credentials';
import {Observable} from 'rxjs/Rx';
import {Message} from './message';

@Injectable()
export class UsersService {
  constructor(private http:Http) { }

  getUsers():Observable<Message>{
    return this.http
    .get(`${credentials.host}/api/users`,{headers:this.getHeaders()})
    .map(res=>toMessage(res.json()))
    .catch(error=>{
      console.log('Error',error);
      return Observable.throw(error);
    });
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept','application/json');
    return headers;
  }
}

function toMessage(r:any):Message{
  let message = <Message>({
    message : r.message
  })
  console.log('Pased message:',message);
  return message;
}