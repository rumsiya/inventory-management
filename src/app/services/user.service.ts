import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = environment.apiUrl + 'users';

  constructor(
    private http: HttpClient
  ) { }

  getUsers(){
    return this.http.get(this.url);
  }

  addUser(){

  }


}
