import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { products } from '../app-product.const';
import { producttype } from './product-type.enum';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.css']
})
export class ProductSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // ProductType = producttype;
  // //目前狀態
  // private Type = producttype.All;

  product = products;
  allcount = this.product.length;

  count(type: string): number {
    var cc = 0;
    products.forEach(element => {
      if (element.type == type)
        cc++;
    }, this)
    return cc;
  }

  
}
