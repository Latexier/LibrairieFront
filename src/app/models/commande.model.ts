export interface Commande {
  Id: number;
  IdClient: number;
  DateCommande: string;
  Total: number;
}

export interface CommandeLivre {
  IdCommande: number;
  IdLivre: number;
  Quantite: number;
  PrixUnitaire: number;
}

export interface CommandePayload {
  Commande: Omit<Commande, 'Id'>;
  Livres: CommandeLivre[];
}
