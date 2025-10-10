export interface Commande {
  Id?: number;
  IdClient?: number | null;
  DateCommande?: Date;
  Total: number;
}

export interface CommandeLivre {
  IdCommande?: number;
  IdLivre: number;
  Quantite: number;
  PrixUnitaire: number;
}

export interface CommandePayload {
  Commande: Commande;
  Livres: CommandeLivre[];
}
