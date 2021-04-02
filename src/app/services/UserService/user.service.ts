import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { currentUser } from 'src/app/models/currentUser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUser(username) {
    return this.http.get<currentUser>(
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

  getUpdateUser(password,bio,image,username) {    
    return this.http.put('https://conduit.productionready.io/api/user', {
      user:{
          password: password,
          bio: bio,
          image: image,
          username: username
      } 
    })
  }
}
