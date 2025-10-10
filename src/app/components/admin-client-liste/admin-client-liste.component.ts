import { Component } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-admin-client-liste',
  templateUrl: './admin-client-liste.component.html',
  styleUrls: ['./admin-client-liste.component.css']
})
export class AdminClientListeComponent {
Mylist: Array<Client>;

constructor (private srv: ClientService) {}


delete(id: number) {

  this.srv.delete(id).subscribe({

    next: () => {

      console.log('Utilisateur supprimé avec succès');
        // Ici tu peux recharger ta liste d’utilisateurs
      },
      error: (err) => {
        console.error('Erreur lors de la suppression : ', err);
      }



  })




}



}
