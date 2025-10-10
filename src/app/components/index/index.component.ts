import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  constructor(public router: Router) {}
  
  goProducts(): void {
    this.router.navigate(['/products']);
  }
}
