import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/AuthService/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm;
  constructor(
    private router:Router, 
    private fb: FormBuilder,
    private auth: AuthService) 
    {
      this.loginForm = fb.group({
        email: ['',[Validators.required,Validators.email]],
        password: ['',[Validators.required, Validators.minLength(6)]]
      })
    }

  ngOnInit(): void {
  }

  login(email,password) {
   
  }

  get(val) {
    return this.loginForm.controls[val];
  }

  log() {
    console.log(this.loginForm);
    
  }
}
