import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../userdashboard.component.css', './header.component.css']
})
export class HeaderComponent {
  userName: string = ''
  constructor(
  ) {
  }

  showProfileSet:boolean = false;



}
