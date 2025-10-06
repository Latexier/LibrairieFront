import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})

export class ClientService {
  private apiUrl = 'http://localhost:50512/api/client';

  constructor(private http: HttpClient) {}

  login(mail: string, password: string): Observable<Client> {
    return this.http.post<Client>(`${this.apiUrl}/login`, { mail, password });
  }
}
