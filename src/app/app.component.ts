import { Component } from '@angular/core';
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
}
