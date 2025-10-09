import { Component } from '@angular/core';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent {

  ngOnInit(){
    if(sessionStorage.getItem["user"]==null){
      document.getElementById("noUser").style.display="block";
      document.getElementById("User").style.display="none";
    }
    else{
      document.getElementById("User").style.display="block";
      document.getElementById("noUser").style.display="none";
    }
  }
}
