import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CreatorComponent} from './creator/creator.component';
import {RegisterPageComponent} from './session/register/register-page.component';
import {LoginPageComponent} from './session/login/login-page.component';
import {HomeComponent} from './home/home.component';
import {ProductsComponent} from './products/products.component';
import {CartComponent} from './cart/cart.component';
import {NotAuthenticatedGuard} from './core/not-authenticated.guard';
import {AdminComponent} from './admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
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
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
