import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_ENDPOINT = '//jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(API_ENDPOINT);
  }

}
