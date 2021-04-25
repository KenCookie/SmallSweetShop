import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { menus } from './app-navbar.const';
import { appPath } from './app-path.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SmallSweetShop';

  // 給 Template 用的路由定義
   path = appPath;

  //  constructor( private title: Title) { 
  //   this.title.setTitle('page title changed');
  // }
}
