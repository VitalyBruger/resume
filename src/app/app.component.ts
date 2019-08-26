import { Component } from '@angular/core';
import { RouterOutlet, ActivatedRoute } from '@angular/router';
import { trigger, state, style, animate, animateChild, transition, query, group } from '@angular/animations';
import { slider } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slider]
})

export class AppComponent {
  title = 'SWEAnketaClient';

  constructor(private route: ActivatedRoute) { }

  animationState: number = 1;

  onActivate($event) {
    this.animationState = this.route.firstChild.snapshot.data['routeIdx'];
  }
}
