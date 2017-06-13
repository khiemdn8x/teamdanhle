import {Headers} from '@angular/http';

export var credentials = {
    host: 'http://localhost:3000',
    clientId:'',
    clientSecret:'',
    getHeaders():Headers{
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Origin','*');
        return headers;
    }
}