import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserLayoutComponent} from './shared/layouts/user-layout/user-layout.component';

const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'session',
        loadChildren: () => import('./session/session.module')
          .then(module => module.SessionModule),
      },
      {
        path: 'cart',
        loadChildren: () => import('./cart/cart.module')
          .then(module => module.CartModule)
      },
      {
        path: 'creator',
        loadChildren: () => import('./creator/creator.module')
          .then(module => module.CreatorModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module')
          .then(module => module.HomeModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./products/products.module')
          .then(module => module.ProductsModule)
      },
      {
        path: 'public',
        loadChildren: () => import('./session/session.module')
          .then(module => module.SessionModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
