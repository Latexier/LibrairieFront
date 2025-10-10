import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Commande, CommandeLivre, CommandePayload } from '../models/commande.model';

@Injectable({
  providedIn: 'root'
})

export class CommandeService {
  private apiUrl = 'http://localhost:50512/api/commande';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Commande[]> {
    return this.http.get<Commande[]>(this.apiUrl);
  }

  getById(id: number): Observable<{ commande: Commande; livres: CommandeLivre[] }> {
    return this.http.get<{ commande: Commande; livres: CommandeLivre[] }>(`${this.apiUrl}/${id}`);
  }

  create(payload: CommandePayload): Observable<any> {
    return this.http.post(this.apiUrl, payload);
  }
}
