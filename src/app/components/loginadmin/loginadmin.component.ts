import { Component } from '@angular/core';
import { Admin } from 'src/app/models/admin.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent {
  login:string;
  password:string;
  a:Admin;
  message:string;

  constructor(private srv:AdminService){}
  ngOnInit():void{}

  connexion(){
    this.srv.login(this.login,this.password).subscribe({
      next:data=>{
        this.a=data;
        this.message="Login réussi";
        sessionStorage.setItem("user",JSON.stringify(this.a));
      },
      error:(err)=>{
        this.message="Mail ou mot de passe incorrect";
      }
    });
  }
}
