import { Component } from '@angular/core';
import { Livre } from 'src/app/models/livre.model';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {
  list:Array<Livre>;

  ngOnInit(){
    this.list=JSON.parse(sessionStorage.getItem("cart"));
  }

  init(){
    this.list=JSON.parse(sessionStorage.getItem("cart"));
  }

  remove(id:number){
    this.list.splice(id-1,1);
    sessionStorage.setItem("cart",JSON.stringify(this.list));
    this.init();
  }
}
