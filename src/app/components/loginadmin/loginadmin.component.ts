import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/admin.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent {
login: string = '';
  password: string = '';
  message: string = '';
  a: any;

  constructor(private srv:AdminService, private router: Router){}
  ngOnInit():void{}

  connexion() {
    this.srv.login(this.login, this.password).subscribe({
      next: (data) => {
        this.a = data;
        this.message = 'Login réussi';
        sessionStorage.setItem('user', JSON.stringify(this.a));

        setTimeout(() => {
          this.router.navigate(['admin/livres']);
        }, 1000);
      },
      error: (err) => {
        this.message = 'Mail ou mot de passe incorrect';
      }
    });
  }
}
