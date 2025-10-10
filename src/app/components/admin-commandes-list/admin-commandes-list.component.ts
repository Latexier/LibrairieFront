import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommandeService } from '../../services/commande.service';
import { Commande } from '../../models/commande.model';

@Component({
  selector: 'app-admin-commandes-list',
  templateUrl: './admin-commandes-list.component.html',
  styleUrls: ['./admin-commandes-list.component.css']
})
export class AdminCommandesListComponent implements OnInit {

  commandes: Commande[] = [];

  constructor(private commandeService: CommandeService, public router: Router) {}

  ngOnInit(): void {
    this.commandeService.getAll().subscribe({
      next: (data) => {
        this.commandes = data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  goToDetails(id: number): void {
    this.router.navigate(['/admin/commandes/details', id]);
  }

}
