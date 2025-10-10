import { Component } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  c:Client;
  tmp:Client;
  message:string; 
  
  constructor(private srv:ClientService){}

  ngOnInit(){
    this.c=JSON.parse(sessionStorage.getItem("user"));
    
  }

  toggle(){
    var icon=document.getElementById("icon");
    var password=document.getElementById("password") as HTMLInputElement;
    console.log(icon.className);
    if(icon.className=="bi bi-eye"){
      icon.className="bi bi-eye-slash";
      password.type="text";
    }
    else{
      icon.className="bi bi-eye";
      password.type="password";
    }
  }

  update(id:number, client:Client){
    this.srv.update(id,this.c).subscribe({
      next:(data)=>{
        console.log("Mise à jour réussie");
        this.srv.getById(this.c.Id).subscribe({
          next:(data)=>{
            this.tmp=data;
            sessionStorage.setItem("user",JSON.stringify(this.tmp));
          }
        })
        this.message="Compte mis à jour";
        setTimeout(() => {
          location.reload();
        }, 1000);
      },
      error(err) {
        console.error(err);
      },
    })
  }
}
