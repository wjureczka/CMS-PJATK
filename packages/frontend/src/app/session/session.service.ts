import { Injectable } from '@angular/core';
import {HttpClient, HttpResponseBase} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Role, User} from '../core/auth.service';

interface LoginDTO {
  email: string;
  password: string;
}

interface RegisterDTO {
  email: string;
  password: string;
}

interface LoginResponse {
  id: number;
  username: string;
  email: string;
  roles: Role[];
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpClient) { }

  login(loginDTO: LoginDTO): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`/api/auth/sign-in`, loginDTO);
  }

  register(registerDTO: RegisterDTO): Observable<HttpResponseBase> {
    return this.http.post<HttpResponseBase>('/api/auth/sign-up', registerDTO);
  }
}
