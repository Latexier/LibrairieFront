import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  mail:string;
  password:string;
  message:string;
  c:Client;

  constructor(private srv:ClientService){}

  ngOnInit(){
    
  }

  connexion(){
    this.srv.login(this.mail,this.password).subscribe({
      next:data=>{
        this.c=data;
        this.message="Login réussi";
        sessionStorage.setItem("user",JSON.stringify(this.c));
        window.location.href="/products";
      },
      error:(err)=>{
        this.message="Mail ou mot de passe incorrect";
        this.mail="";
        this.password="";
      }
    });
  }
}
