import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = 'https://reqres.in/api';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(`${this.url}/users`).pipe(map(resp => resp['data']));
  }

  getUserById(id: number) {
    return this.http.get(`${this.url}/users/${id}`).pipe(map(resp => resp['data']));
  }
}
