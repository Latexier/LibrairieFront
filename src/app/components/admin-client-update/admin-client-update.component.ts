import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-admin-client-update',
  templateUrl: './admin-client-update.component.html',
  styleUrls: ['./admin-client-update.component.css']
})
export class AdminClientUpdateComponent {
  c: any

  constructor(private srv: ClientService, private route: ActivatedRoute, private router: Router ) {}

ngOnInit(): void {

const id = Number (this.route.snapshot.paramMap.get("id"))
this.srv.getById(id).subscribe({
  next: (data) => { this.c = data},
  error: (err) => {
    console.error(err);
  }


});

  
}


  Update(id: number, Client: Client) {
    this.srv.update(id, Client).subscribe({
      next: (res) => {
        console.log('Utilisateur mis à jour avec succès : ', res);
        
      },
      error: (err) => {
        console.error('Erreur lors de la mise à jour : ', err);
      }
    });

    this.router.navigate(["/admin/client/liste"]);

  }
}


