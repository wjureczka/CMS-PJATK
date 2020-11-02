import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';

const sessionsRoutes = [
    {
    path: '',
    redirectTo: 'login',
  },
  {
    path: 'login',
    component: LoginPageComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(sessionsRoutes)],
  exports: [RouterModule]
})
export class SessionsRoutingModule {
}
