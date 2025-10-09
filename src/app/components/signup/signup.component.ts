import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../../models/client.model';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  client: Client = {
    Nom: '',
    Prenom: '',
    Mail: '',
    Password: ''
  };

  successMessage = '';
  errorMessage = '';
  loading = false;

  constructor(
    private clientService: ClientService,
    private router: Router
  ) {}

  onSubmit(form: any): void {
    this.successMessage = '';
    this.errorMessage = '';

    if (form.invalid) {
      this.errorMessage = 'Veuillez remplir correctement tous les champs.';
      return;
    }

    this.loading = true;

    this.clientService.register(this.client).subscribe({
      next: (res) => {
        this.successMessage = `Inscription réussie, Bienvenue ${this.client.Prenom} !`;
        this.loading = false;

        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1000);
      },
      error: (err) => {
        this.errorMessage = err.error || 'Une erreur est survenue.';
        this.loading = false;
      }
    });
  }
}
