import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface User {}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private url = 'http://127.0.0.1:8000/users/';
  constructor(private _http: HttpClient) {}

  getUsers() {
    return this._http.get<Array<User>>(this.url);
  }

  createUser(user: User) {
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post<User>(this.url, JSON.stringify(user), {
      headers: myHeaders,
    });
  }

  updateUser(user: User) {
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.put<User>(this.url, JSON.stringify(user), {
      headers: myHeaders,
    });
  }

  deleteUser(id: string) {
    return this._http.delete<User>(this.url + '/' + id);
  }
}
