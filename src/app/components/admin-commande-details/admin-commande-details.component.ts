import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommandeService } from '../../services/commande.service';
import { Commande, CommandeLivre } from '../../models/commande.model';

@Component({
  selector: 'app-admin-commande-details',
  templateUrl: './admin-commande-details.component.html',
  styleUrls: ['./admin-commande-details.component.css']
})
export class AdminCommandeDetailsComponent implements OnInit {
  commande!: Commande;
  livres: CommandeLivre[] = [];

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private commandeService: CommandeService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.commandeService.getById(id).subscribe({
      next: (data) => {
        this.commande = data.commande;
        this.livres = data.livres;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
