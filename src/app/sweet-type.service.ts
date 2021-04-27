import { Injectable } from '@angular/core';
import { products } from './app-product.const';

@Injectable({
  providedIn: 'root'
})
export class SweetTypeService {

  constructor() { }

  private product = products;

  setsweetType(choisetype: string) {
    console.log("SET::");
    console.log(products.filter(Type => Type.type == choisetype));

    if (choisetype == 'all') {
      this.product = products
      this.getsweetType();
      return this.product;
    }

    else {
      this.product = products.filter(Type => Type.type == choisetype);
      this.getsweetType();
      return this.product;
    }
  }

  getsweetType() {
    console.log("GET::");
    console.log(this.product);
    return this.product;
  }
}
