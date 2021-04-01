import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  getUpdateUser(email,bio,image) {
    console.log('successfully');
    
    return this.http.put('https://conduit.productionready.io/api/user', {
      user:{
          email: email,
          bio: bio,
          image: image
      } 
    })
  }
}
