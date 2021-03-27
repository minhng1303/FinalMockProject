import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/views/nav-bar/nav-bar.component';
import { FooterComponent } from './components/views/footer/footer.component';
import { LoginComponent } from './components/views/login/login.component';
import { SignUpComponent } from './components/views/sign-up/sign-up.component';
import { HomeComponent } from './components/views/home/home.component';
import { PaginationComponent } from './components/commons/pagination/pagination.component';
import { LikeButtonComponent } from './components/commons/like-button/like-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    PaginationComponent,
    LikeButtonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
