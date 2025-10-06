import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

constructor(private http: HttpClient) { }
  message: string;
   Mylist: Array<Client>;
  ngOnInit(): void {
  }


create() {
    this.http.post(
      "http://localhost:59819/api/personne",
      this.client, // pas besoin de JSON.stringify, HttpClient le fait automatiquement
      {
        headers: new HttpHeaders({ "Content-Type": "application/json" })
      }
    ).subscribe({
      next: (response) => {
        this.message = "Client créée avec succès";
        console.log(response);
      },
      error: (err) => {
        this.message = "Erreur de création du Client";
        console.error(err);
      }

      init()
  {
    this.http.get<Array<Personne>>("http://localhost:59819/api/personne").subscribe(
      (response) => {
        this.Mylist=response;
       
        console.log(response);
      }
    );

  }
  ngOnInit(): void {
    this.init();
  }

  delete(p:Personne)
  {
    this.http.delete("http://localhost:59819/api/personne/" + p.id

 
  ).subscribe(response => {
  
   this.message="Client supprimé";
   this.init();


  });

  }




    });
  }
}
