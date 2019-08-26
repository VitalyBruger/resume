import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private user: UserService, private router: Router) { }
  userName: string = "admin";
  userPassword: string = "1";
  wrongpass: boolean = false;

  login() {
    this.user.login(this.userName, this.userPassword).subscribe(
      (data: string) => { this.user.userLogin = data; this.router.navigate(['/ankets']) },
      err => {
        if (err.status == 401) {
          this.wrongpass = true;
        }
      }
    );
  }

  logout() {
    this.user.logout();
  }

  isUserLogin() {
    this.user.isUserLogin()
  }

  getUserName() {
    return this.user.getUserName();
  }

}
