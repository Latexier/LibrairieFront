import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-admin-client-liste',
  templateUrl: './admin-client-liste.component.html',
  styleUrls: ['./admin-client-liste.component.css']
})
export class AdminClientListeComponent {
Mylist: Array<Client>;

constructor (private srv: ClientService, private router: Router) {}

 ngOnInit(): void {
   // this.srv.getliste().then(x=> this.Mylist = x);
   this.srv.getAll().subscribe({
   next: (res) => {
    this.Mylist = res;
    console.log(this.Mylist);
    },
    error: (err) => console.error(err)
  });

 }
 
 
  delete(id: number) : void {
  if (confirm('Voulez-vous vraiment supprimer le client ?')) {

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
setTimeout(() => {
        location.reload();
      }, 2000);
//location.reload();
 
  }

edit(id: number) : void {

this.router.navigate(["/admin/client/update", id])

}



}