import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { TranslateService } from '../translate.service';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.css']
})
export class MainNavigationComponent implements OnInit {

  constructor(private user: UserService, public translationService: TranslateService) { }

  ngOnInit() {
    if (!this.user.userLogin) {
      this.user.isUserLogin();
    }
  }

  logout() {
    this.user.logout();
  }
}
