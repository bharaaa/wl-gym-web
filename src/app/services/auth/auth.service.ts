import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8090/api/auth';
  private tokenKey = 'authToken';
  private nameKey = 'userName';

  constructor(private http: HttpClient) {}

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  setName(name: string): void {
    localStorage.setItem(this.nameKey, name);
  }

  getName(): string | null {
    return localStorage.getItem(this.nameKey);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
