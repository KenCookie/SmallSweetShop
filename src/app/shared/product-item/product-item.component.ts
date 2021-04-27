import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/app-product.const';
import { SweetTypeService } from 'src/app/sweet-type.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  constructor(private sweettypeservice: SweetTypeService) { }

  ngOnInit(): void {
  }

  // product = products;
  product = this.sweettypeservice.getsweetType();

  chineseType(type: string) {
    if (type == 'today') return '本日精選';
    else if (type == 'popular') return '人氣推薦';
    else return '新品上市';
  }
  
  // getsweetType(choisetype: string){
  //   console.log(products.filter(Type => Type.type == choisetype));
  //   return products.filter(Type => Type.type == choisetype);
  // }
}
