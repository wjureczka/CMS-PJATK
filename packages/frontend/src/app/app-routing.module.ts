import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CreatorComponent} from './creator/creator.component';
import {RegisterPageComponent} from './session/register/register-page.component';
import {LoginPageComponent} from './session/login/login-page.component';
import {HomeComponent} from './home/home.component';
import {CartComponent} from './cart/cart.component';
import {NotAuthenticatedGuard} from './core/not-authenticated.guard';
import {ProductsListingComponent} from './products/products-listing/products-listing.component';
import {ProductComponent} from './products/product/product.component';

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
    component: CartComponent
  },
  {
    path: 'products',
    component: ProductsListingComponent
  },
  {
    path: 'products/:productId',
    component: ProductComponent
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
