import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LivreService } from '../../services/livre.service';
import { Livre } from '../../models/livre.model';

@Component({
  selector: 'app-admin-livre-detail',
  templateUrl: './admin-livre-detail.component.html',
  styleUrls: ['./admin-livre-detail.component.css']
})
export class AdminLivreDetailComponent implements OnInit {
  livre!: Livre;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private livreService: LivreService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.livreService.getById(id).subscribe({
      next: (data) => {
        this.livre = data;
      },
      error: (err) => {
        this.errorMessage = 'Erreur lors du chargement du livre.';
      }
    });
  }

  onEdit(): void {
    this.router.navigate(['/admin/livres/edit', this.livre.Id]);
  }

  onDelete(): void {
    if (confirm(`Voulez-vous vraiment supprimer "${this.livre.Titre}" ?`)) {
      this.livreService.delete(this.livre.Id).subscribe({
        next: () => {
          alert('Livre supprimé avec succès.');
          this.router.navigate(['/admin/livres']);
        },
        error: () => {
          alert('Erreur lors de la suppression du livre.');
        }
      });
    }
  }
}
