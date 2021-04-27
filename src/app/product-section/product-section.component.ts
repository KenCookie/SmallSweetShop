import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { products } from '../app-product.const';
import { SweetTypeService } from '../sweet-type.service';
import { producttype } from './product-type.enum';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.css']
})
export class ProductSectionComponent implements OnInit {

  constructor(private sweettypeservice: SweetTypeService) { }

  ngOnInit(): void {
  }

  product = this.sweettypeservice.getsweetType.length;

  // ProductType = producttype;
  //目前狀態
  // private Type = producttype.All;

  // getList(): [] {
  //   let list;

  //   switch (this.Type) {
  //     case producttype.Today:
  //       list = this.sweettypeservice.setsweetType('today');
  //       break;

  //     case producttype.Popular:
  //       list = this.sweettypeservice.setsweetType('popular');
  //       break;

  //     case producttype.New:
  //       list = this.sweettypeservice.setsweetType('new');
  //       break;

  //     default:
  //       list = this.sweettypeservice.getsweetType();
  //       break;
  //   }
  //   return list;
  // }

  getList(choosetype: string): [] {
    let list;

    switch (choosetype) {
      case 'today':
        list = this.sweettypeservice.setsweetType(choosetype);
        break;

      case 'popular':
        list = this.sweettypeservice.setsweetType(choosetype);
        break;

      case 'new':
        list = this.sweettypeservice.setsweetType(choosetype);
        break;

      default:
        list = this.sweettypeservice.setsweetType(choosetype);
        break;
    }
    return list;
  }

  allcount = products.length;

  count(type: string): number {
    var cc = 0;
    products.forEach(element => {
      if (element.type == type)
        cc++;
    }, this)
    return cc;
  }


}
