import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
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
