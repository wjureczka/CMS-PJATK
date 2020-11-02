import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {RegisterPageComponent} from './register-page/register-page.component';

const sessionsRoutes = [
  {
    path: '',
    redirectTo: 'login',
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'register',
    component: RegisterPageComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(sessionsRoutes)],
  exports: [RouterModule]
})
export class SessionsRoutingModule {
}
