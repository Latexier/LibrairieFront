import { Component } from '@angular/core';
import { Livre } from 'src/app/models/livre.model';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {
  list:Livre[];
  

  ngOnInit(){
    this.list=JSON.parse(sessionStorage.getItem("cart"));
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
}
