import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';
import jwtDecode from 'jwt-decode';

export enum Role {
  ROLE_USER = 'ROLE_USER'
}

export interface User {
  id: number;
  username: string;
  email: string;
  roles: Role[];
}

interface JWTPayload {
  sub: string;
  iat: number;
  exp: number;
  email: string;
  id: number;
  roles: Role[];
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  protected readonly AUTH_COOKIE_NAME = 'CMS_AUTH_COOKIE';

  public user$ = new BehaviorSubject<User | null>(null);

  constructor(private cookieService: CookieService) {
  }

  public login(user: User, authToken: string): void {
    this.cookieService.set(this.AUTH_COOKIE_NAME, authToken);

    this.user$.next({
      id: user.id,
      username: user.username,
      email: user.email,
      roles: user.roles
    });
  }

  public loadUser(): void {
    const accessToken = this.cookieService.get(this.AUTH_COOKIE_NAME);

    if (!accessToken) {
      return;
    }

    const jwtPayload = jwtDecode(accessToken) as JWTPayload;

    this.user$.next({
      username: jwtPayload.sub, roles: jwtPayload.roles, email: jwtPayload.email, id: jwtPayload.id
    });
  }
}
