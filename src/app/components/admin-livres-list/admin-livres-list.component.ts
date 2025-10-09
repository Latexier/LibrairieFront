import { Component, OnInit } from '@angular/core';
import { LivreService } from '../../services/livre.service';
import { Livre } from '../../models/livre.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-livres-list',
  templateUrl: './admin-livres-list.component.html',
  styleUrls: ['./admin-livres-list.component.css']
})
export class AdminLivresListComponent implements OnInit {
  livres: Livre[] = [];
  errorMessage = '';

  constructor(private livreService: LivreService, public router: Router) {}

  ngOnInit(): void {
    this.loadLivres();
  }

  loadLivres(): void {
    this.livreService.getAll().subscribe({
      next: (data) => {
        this.livres = data;
      },
      error: (err) => {
        this.errorMessage = 'Erreur de chargement des livres';
      }
    });
  }

  onCreate(): void {
    this.router.navigate(['/admin/livres/new']);
  }

  onView(id: number): void {
    this.router.navigate(['/admin/livres', id]);
  }

  onEdit(id: number): void {
    this.router.navigate(['/admin/livres/edit', id]);
  }

  onDelete(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer ce livre ?')) {
      this.livreService.delete(id).subscribe({
        next: () => this.loadLivres(),
        error: () => alert('Erreur lors de la suppression.')
      });
    }
  }
}
