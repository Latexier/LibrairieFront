import { Component } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-admin-client-update',
  templateUrl: './admin-client-update.component.html',
  styleUrls: ['./admin-client-update.component.css']
})
export class AdminClientUpdateComponent {
  c: any

  constructor(private srv: ClientService ) {}


  Update(id: number, Client: Client) {
    this.srv.update(id, Client).subscribe({
      next: (res) => {
        console.log('Utilisateur mis à jour avec succès : ', res);
        
      },
      error: (err) => {
        console.error('Erreur lors de la mise à jour : ', err);
      }
    });
  }
}


