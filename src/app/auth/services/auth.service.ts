import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { environments } from 'src/environments/env';
import { UserLogin } from '../interfaces/userLogin.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = environments.baseUrl;
  private user?: UserLogin;

  constructor(private http: HttpClient) {}

  get currentUser(): UserLogin | undefined {
    if (!this.user) return undefined;
    return structuredClone(this.user);
  }

  login(dni: number, password: number): Observable<UserLogin> {
    return this.http.get<UserLogin>(`${this.baseUrl}/userLogin`).pipe(
      tap((user) => (this.user = user)),
      tap((user) => localStorage.setItem('token', user.dni.toString()))
    );
  }
}
