import { Component, OnInit } from '@angular/core';
import { products } from '../app-product.const';
import { SweetTypeService } from '../sweet-type.service';
import { choosetype } from './product-type.enum';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.css']
})
export class ProductSectionComponent implements OnInit {

  constructor(private sweettypeservice: SweetTypeService) { }

  ngOnInit(): void {
  }

  //目前狀態

  // 給 Template 用的寄送方式列舉
  ProductType = choosetype;
  // 當前的類型選擇，預設使用 All
  private selectedType = choosetype.All;
  // 切換類型
  getTypeList(clicktype: number): [] {
    let list;
    this.selectedType = clicktype;
    switch (this.selectedType) {
      case choosetype.Today:
        list = this.sweettypeservice.setsweetType('today');
        break;
      case choosetype.Popular:
        list = this.sweettypeservice.setsweetType('popular');
        break;
      case choosetype.New:
        list = this.sweettypeservice.setsweetType('new');
        break;
      default:
        list = this.sweettypeservice.setsweetType('all');
        break;
    }
    return list;
  }

  didSelected(type: number): boolean {
    return this.selectedType === type;
  }

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

  // product = this.sweettypeservice.getsweetType.length;

  // getList(choosetype: string): [] {
  //   let list;

  //   switch (choosetype) {
  //     case 'today':
  //       list = this.sweettypeservice.setsweetType(choosetype);
  //       break;

  //     case 'popular':
  //       list = this.sweettypeservice.setsweetType(choosetype);
  //       break;

  //     case 'new':
  //       list = this.sweettypeservice.setsweetType(choosetype);
  //       break;

  //     default:
  //       list = this.sweettypeservice.setsweetType(choosetype);
  //       break;
  //   }
  //   return list;
  // }

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
