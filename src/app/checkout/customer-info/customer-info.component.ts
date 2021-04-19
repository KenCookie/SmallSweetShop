import { Component, OnInit } from '@angular/core';
import { appPath } from '../../app-path.const';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  path = appPath;
}
