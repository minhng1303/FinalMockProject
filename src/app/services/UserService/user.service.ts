import { currentUser } from 'src/app/models/currentUser';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../AuthService/auth.service';
import { AuthInterceptor } from 'src/app/interceptors/auth.interceptor';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUser(username) {
    return this.http.get(
      `https://conduit.productionready.io/api/profiles/${username}`
    );
  }

  followUser(username) {
    return this.http.post(
      `https://conduit.productionready.io/api/profiles/${username}/follow`,
      {}
    );
  }

  unFollowUser(username) {
    return this.http.delete(
      `https://conduit.productionready.io/api/profiles/${username}/follow`
    );
  }
}
