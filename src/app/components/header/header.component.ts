import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  btnlogin:any;
  btncompte:any;
  btncommande:any;

  ngOnInit(){
    this.btnlogin=document.getElementById("login");
    this.btncompte=document.getElementById("compte");
    this.btncommande=document.getElementById("commande");
    if(sessionStorage.getItem("user")!=null){
      this.btnlogin.style.display="none";
      this.btncompte.style.display="block";
    }
    else{
      this.btnlogin.style.display="block";
      this.btncompte.style.display="none";
    }
  }
}
