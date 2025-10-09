import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LivreService } from '../../services/livre.service';
import { Livre } from '../../models/livre.model';

@Component({
  selector: 'app-admin-livre-form',
  templateUrl: './admin-livre-form.component.html',
  styleUrls: ['./admin-livre-form.component.css']
})

export class AdminLivreFormComponent implements OnInit {
  livre: Livre = {
    Id: 0,
    Titre: '',
    Prix: 0,
    Categorie: '',
    Image: '',
    Isbn: '',
    Description: ''
  };

  isEdit = false;
  loading = false;
  message = '';

  categories: string[] = [
    'Fantaisie',
    'Policier',
    'Manga',
    'Vulgarisation',
    'Thriller',
    'Science-fiction',
    'Romance'
  ];

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private livreService: LivreService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.loading = true;
      this.livreService.getById(+id).subscribe({
        next: (data) => {
          this.livre = data;
          this.loading = false;
        },
        error: () => (this.loading = false)
      });
    }
  }

  onSubmit(): void {
    if (!this.livre.Titre || !this.livre.Categorie || this.livre.Prix <= 0 || !this.livre.Isbn) {
      this.message = "Veuillez remplir tous les champs obligatoires correctement.";
      return;
    }

    this.loading = true;
    const obs = this.isEdit
      ? this.livreService.update(this.livre.Id, this.livre)
      : this.livreService.add(this.livre);

    obs.subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/admin/livres']);
      },
      error: () => {
        this.message = "Erreur lors de l'enregistrement.";
        this.loading = false;
      }
    });
  }
}
