import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// Constant
import { appPath } from './app-path.const';

// for Angular 8 以上
const routes: Routes = [
  {
    path: appPath.home,
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: appPath.products,
    loadChildren: () => import('./product-section/product-section.module').then(m => m.ProductSectionModule)
  },
  {
    path: appPath.login,
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: appPath.cart,
    loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)
  },
  {
    path: appPath.checkout,
    loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule)
  },
  {
    path: appPath.success,//'success'
    loadChildren: () => import('./success/success.module').then(m => m.SuccessModule)
  },
  {
    path: '**',
    redirectTo: appPath.home,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }