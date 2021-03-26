import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  createUser(username: string,email: string, password: string) {
    return this.http.post<User>('https://conduit.productionready.io/api/users', {
      user: {
        username: username,
        email: email,
        password: password
      }
    })
  }

  login(email: string, password: string) {
    return this
  }
}
