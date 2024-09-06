import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GymService {
  private apiUrl = 'http://localhost:8090/api';

  constructor(private http: HttpClient) {}

  registerMember(memberData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register-member`, memberData);
  }

  getUser(): Observable<any> {
    return this.http.get(`${this.apiUrl}/members`);
  }
}
