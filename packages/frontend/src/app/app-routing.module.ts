import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CreatorComponent} from './creator/creator.component';
import {RegisterPageComponent} from './session/register/register-page.component';
import {LoginPageComponent} from './session/login/login-page.component';
import {HomeComponent} from './home/home.component';
import {NotAuthenticatedGuard} from './core/not-authenticated.guard';
import {ProductsListingComponent} from './products/products-listing/products-listing.component';
import {ProductPageComponent} from './products/product-page/product-page.component';
import {CartPageComponent} from './cart/cart-page/cart-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'creator',
    component: CreatorComponent
  },
  {
    path: 'register',
    component: RegisterPageComponent,
    canActivate: [NotAuthenticatedGuard]
  },
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [NotAuthenticatedGuard]
  },
  {
    path: 'cart',
    component: CartPageComponent
  },
  {
    path: 'products',
    component: ProductsListingComponent
  },
  {
    path: 'products/:productId',
    component: ProductPageComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('src/app/admin/admin.module').then((module) => module.AdminModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
