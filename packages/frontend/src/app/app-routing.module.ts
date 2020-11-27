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
        path: 'cart',
        loadChildren: () => import('./views/cart/cart.module')
          .then(module => module.CartModule)
      },
      {
        path: 'creator',
        loadChildren: () => import('./views/creator/creator.module')
          .then(module => module.CreatorModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./views/home/home.module')
          .then(module => module.HomeModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./views/products/products.module')
          .then(module => module.ProductsModule)
      },
      {
        path: 'public',
        loadChildren: () => import('./views/sessions/sessions.module')
          .then(module => module.SessionsModule)
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
