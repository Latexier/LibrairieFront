import { Component } from '@angular/core';
import { Livre } from 'src/app/models/livre.model';
import { CommandeService } from 'src/app/services/commande.service';
import { Commande, CommandeLivre, CommandePayload } from 'src/app/models/commande.model';
@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {
  list:Livre[];
  total = 0;

  constructor(private commandeService: CommandeService) {}

  ngOnInit(){
    this.list=JSON.parse(sessionStorage.getItem("cart"));
    this.total = this.list.reduce((sum, livre) => sum + livre.Prix, 0);
    if(this.list!=null){
      document.getElementById("commande").style.display="block";
      document.getElementById("empty").style.display="none";
    }
    else{
      document.getElementById("commande").style.display="none";
      document.getElementById("empty").style.display="block";
    }
  }

  remove(id:number){
    console.log(id);
    this.list.splice(id,1);
    sessionStorage.setItem("cart",JSON.stringify(this.list));
    location.reload();
  }

  clearCart(): void {
    sessionStorage.removeItem('cart');
    this.list = [];
    this.total = 0;
  }

  commander(): void {
    if (this.list.length === 0) {
      alert('Votre panier est vide.');
      return;
    }

    const payload: CommandePayload = {
      Commande: {
        IdClient: 1,
        Total: this.total,
        DateCommande: new Date()
      },
      Livres: this.list.map(l => ({
        IdLivre: l.Id,
        Quantite: 1,
        PrixUnitaire: l.Prix
      }))
    };

    this.commandeService.create(payload).subscribe({
      next: (res) => {
        alert('Commande enregistrée avec succès');
        this.clearCart();
      },
      error: (err) => {
        console.error(err);
        alert('Erreur lors de la création de la commande.');
      }
    });
  }
}
