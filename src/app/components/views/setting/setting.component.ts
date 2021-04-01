import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/AuthService/auth.service';
import { UserService } from 'src/app/services/UserService/user.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  settingForm: FormGroup
  constructor(private userService: UserService, private router: Router, private fb: FormBuilder, private auth: AuthService) {
    this.settingForm = fb.group({
      image: ['', Validators.required],
      username: [{ value: auth.currentUser.username, disabled: false }, Validators.required],
      bio: ['', Validators.required],
      email: [{ value: auth.currentUser.email, disabled: false }, [Validators.required, Validators.email]],
      password: ['', Validators.required, Validators.minLength[8]]
    })
  }

  ngOnInit(): void {
  }

  saveSetting() {
    console.log(this.settingForm.value);

    this.userService.getUpdateUser(this.settingForm.value.email, this.settingForm.value.bio, this.settingForm.value.image)
      .subscribe(res => {
        console.log('succsessful');

      })
  }
}
