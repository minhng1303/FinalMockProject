import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/AuthService/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.auth.isAuthenticated) {
      let authRequest = request.clone({
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.auth.currentUser.token
        })
      })
      return next.handle(authRequest);
    }
  }
}
