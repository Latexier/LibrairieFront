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
}
