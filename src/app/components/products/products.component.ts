import { Component, OnInit } from '@angular/core';
import { LivreService } from '../../services/livre.service';
import { Livre } from '../../models/livre.model';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  livres: Livre[] = [];
  loading = true;

  constructor(private livreService: LivreService) {}

  ngOnInit(): void {
    this.livreService.getAll().subscribe({
      next: (data) => {
        this.livres = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur :', err);
        this.loading = false;
      }
    });
  }
}
