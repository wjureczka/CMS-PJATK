import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

interface LoginDTO {
  username: string;
  password: string;
}

interface RegisterDTO {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpClient) { }

  login(loginDTO: LoginDTO): Observable<any> {
    return this.http.post(`/api/auth/sign-in`, loginDTO);
  }

  register(registerDTO: RegisterDTO): Observable<any> {
    return this.http.post('/api/auth/sign-up', registerDTO);
  }
}
