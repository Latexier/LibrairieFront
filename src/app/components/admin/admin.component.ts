import { Component } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

constructor(private srv: ClientService) { }
  message: string;
   Mylist: Array<ClientService>;
   c : any;
   client = {ClientService};
   
  ngOnInit(): void {
  }


create() {
    this.srv.post(this.client)
  {
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
    this.http.get<Array<Personne>>("http://localhost:5012/api/client").subscribe(
      (response) => {
        this.Mylist=response;
       
        console.log(response);
      }
    );

  }
 
  
  

  delete(c:{Client: any;}):void
  {
    this.http.delete("http://localhost:59819/api/personne/" + c.Id

 
  ).subscribe(response => {
  
   this.message="personne supprimée";
   this.init();


  });
  
  }




    });



    
  }
  update()
  {
    const body = JSON.stringify(this.c );
    
    this.http.put("http://localhost:59819/api/personne", body, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).
      subscribe(response => {

     
        this.message = "update ok"
      //  this.init();

      }

       );

  }
}
