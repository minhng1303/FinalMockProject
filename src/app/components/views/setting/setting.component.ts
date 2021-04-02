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
  userProfile;
  constructor(private userService: UserService, 
              private router: Router, 
              private fb: FormBuilder, 
              private auth: AuthService) {
      this.settingForm = fb.group({
        image: ['', Validators.required],
        username: ['', Validators.required],
        bio: ['', Validators.required],
        email: [{value: '',disabled: true}, [Validators.required, Validators.email]],
        password: ['', Validators.required, Validators.minLength[8]]
      })
    }

  ngOnInit(): void {
    this.userService.getUser(this.auth.currentUser.username).subscribe(res => {
      this.userProfile = res['profile'];
      this.settingForm = this.fb.group({
        image: [this.userProfile.image, Validators.required],
        username: [this.auth.currentUser.username, Validators.required],
        bio: [this.userProfile.bio, Validators.required],
        email: [{ value: this.auth.currentUser.email, disabled: true }, [Validators.required, Validators.email]],
        password: ['', Validators.required, Validators.minLength[8]]
      })
    })
  }

  saveSetting() {
    this.userService.getUpdateUser(this.settingForm.value.password, 
                                  this.settingForm.value.bio, 
                                  this.settingForm.value.image,
                                  this.settingForm.value.username)
      .subscribe(res => {
        this.router.navigate(['/'])
      })
    }

  get(val) {
    return this.settingForm.controls[val];
  }
}
