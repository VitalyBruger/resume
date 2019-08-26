import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
  userLogin: string = null;
  constructor(private http: HttpClient, private router: Router) { }

  login(userName: string, userPassword: string) {
    return this.http.post('/api/login', { login: userName, password: userPassword }, { withCredentials: true })
  }

  logout() {
    this.http.post('/api/logout', { withCredentials: true })
      .subscribe((data: string) => { this.userLogin = null });
  }

  isUserLogin() {
    this.http.get('/api/isUserLogin', { withCredentials: true })
      .subscribe((data: string) => { this.userLogin = data; });
  }

  getUserName() {
    return this.userLogin;
  }
}
