import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/app-product.const';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  product = products;

  chineseType(type: string) {
    if (type == 'today') return '本日精選';
    else if (type == 'popular') return '人氣推薦';
    else return '新品上市';
  }
  
}
