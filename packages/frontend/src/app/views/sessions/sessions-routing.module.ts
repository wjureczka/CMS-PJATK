import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';

const sessionsRoutes = [
    {
    path: '',
    redirectTo: 'login',
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(sessionsRoutes)],
  exports: [RouterModule]
})
export class SessionsRoutingModule {
}
