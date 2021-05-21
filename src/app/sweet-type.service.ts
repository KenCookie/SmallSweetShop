import { Injectable } from '@angular/core';
import { products } from './app-product.const';

@Injectable({
  providedIn: 'root'
})
export class SweetTypeService {

  constructor() { }

  private product = products;
  private listcount = products.length;


  setsweetType(choisetype: string) {
    console.log("SET::");
    console.log(products.filter(Type => Type.type == choisetype));

    if (choisetype == 'all') {
      this.product = products
      this.getsweetType();
      this.listcount = this.product.length;
      return this.product;
    }

    else {
      this.product = products.filter(Type => Type.type == choisetype);
      this.listcount = this.product.length;
      this.getsweetType();
      return this.product;
    }
  }

  getsweetType() {
    console.log("GET::");
    console.log(this.product);
    console.log(this.product.length);
    this.changepage(2);
    return this.product;
  }

  getsweetcount() {
    return this.listcount;
  }

  getpagecount() {
    return (this.listcount / 6) + 1;
  }

  changepage(pagenumber: number) {
    let ll, pagecount = 6 * pagenumber;

    if (this.product.length > 6) {
      ll = this.product.slice(pagecount - 6, pagecount);
      console.log(ll);
    }
  }
}
