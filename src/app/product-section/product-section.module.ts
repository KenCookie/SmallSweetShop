import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductSectionRoutingModule } from './product-section-routing.module';
import { ProductSectionComponent } from './product-section.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemModule } from '../shared/product-item/product-item.module';


@NgModule({
  declarations: [
    ProductSectionComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductSectionRoutingModule,
    ProductItemModule
  ]
})
export class ProductSectionModule { }
