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
  btndeco:any;

  ngOnInit(){
    this.btnlogin=document.getElementById("login");
    this.btncompte=document.getElementById("compte");
    this.btncommande=document.getElementById("commande");
    this.btndeco=document.getElementById("disconnect");
    if(sessionStorage.getItem("user")!=null){
      this.btnlogin.style.display="none";
      this.btncompte.style.display="block";
      this.btndeco.style.display="block";
    }
    else{
      this.btnlogin.style.display="block";
      this.btncompte.style.display="none";
      this.btndeco.style.display="none";
    }
  }

  disconnect(){
    sessionStorage.removeItem("user");
    location.reload();
    this.btndeco.style.display="none";
  }
}
