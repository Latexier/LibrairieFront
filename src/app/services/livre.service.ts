import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livre } from '../models/livre.model';

@Injectable({
  providedIn: 'root'
})

export class LivreService {
  private apiUrl = 'http://localhost:50512/api/livre';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Livre[]> {
    return this.http.get<Livre[]>(this.apiUrl);
  }

  getById(id: number): Observable<Livre> {
    return this.http.get<Livre>(`${this.apiUrl}/${id}`);
  }

  getByCategorie(categorie: string): Observable<Livre[]> {
    return this.http.get<Livre[]>(`${this.apiUrl}/categorie/${categorie}`);
  }

  add(livre: Livre): Observable<any> {
    return this.http.post(`${this.apiUrl}`, livre);
  }

  update(id: number, livre: Livre): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, livre);
  }

  uploadImage(formData: FormData) {
    return this.http.post(`${this.apiUrl}/upload`, formData);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
