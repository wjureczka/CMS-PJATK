import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {AuthService} from './auth.service';

@Injectable()
export class CMSInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const user = this.authService.user$.value;

    let apiRequest = request.clone({
      url: `${environment.CMS_API_URL}${request.url}`,
    });

    if (user) {
      apiRequest = apiRequest.clone({
        setHeaders: { Authorization: `Bearer ${user.accessToken}` }
      });
    }

    return next.handle(apiRequest);
  }
}
