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
  Mylist: Client[] = [];

  constructor(private srv: ClientService, private router: Router) {}

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(): void {
    this.srv.getAll().subscribe({
      next: (res) => {
        this.Mylist = res;
      },
      error: (err) => console.error('Erreur chargement clients :', err)
    });
  }

  delete(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer ce client ?')) {
      this.srv.delete(id).subscribe({
        next: () => {
          console.log('Client supprimé avec succès');
          this.Mylist = this.Mylist.filter(client => client.Id !== id);
        },
        error: (err) => {
          console.error('Erreur lors de la suppression :', err);
        }
      });
    }
  }

  edit(id: number): void {
    this.router.navigate(['/admin/client/update', id]);
  }
}
