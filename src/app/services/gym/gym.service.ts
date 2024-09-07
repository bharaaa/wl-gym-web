import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class GymService {
  private apiUrl = 'http://localhost:8090/api';

  constructor(private http: HttpClient, private authService: AuthService) {}

  registerMember(memberData: any): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post(`${this.apiUrl}/auth/register-member`, memberData, {
      headers,
    });
  }

  getUser(): Observable<any> {
    return this.http.get(`${this.apiUrl}/members`);
  }
}
