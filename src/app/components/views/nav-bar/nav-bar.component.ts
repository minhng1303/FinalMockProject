import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { currentUser } from 'src/app/models/currentUser';
import { registerUser } from 'src/app/models/registerUser';
import { AuthService } from 'src/app/services/AuthService/auth.service';
import { UserService } from 'src/app/services/UserService/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  image: string;
  constructor(public auth: AuthService, private router: Router, private userService: UserService) {}

  ngOnInit(): void { 
  }

  logOut() {
    localStorage.removeItem('user');
    this.auth.setLogout();
    this.router.navigate(['login'])
  }
  
  get getImage() {
    this.userService.getUser(this.auth.currentUser.username).subscribe(res => {
        this.image = res['image']
    })
    return this.image    
  }

}
