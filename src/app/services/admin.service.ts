import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin.model';

@Injectable({
  providedIn: 'root'
})

export class AdminService {
  private apiUrl = 'http://localhost:50512/api/admin';

  constructor(private http: HttpClient) {}

  login(login: string, password: string): Observable<Admin> {
    return this.http.post<Admin>(`${this.apiUrl}/login`, { login, password });
  }
}
