import { Component, OnInit } from '@angular/core';
import { LivreService } from '../../services/livre.service';
import { Livre } from '../../models/livre.model';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  livres: Livre[] = [];
  loading = true;
  cart:Array<Livre>;
  tmp:Livre;

  constructor(private livreService: LivreService) {}

  ngOnInit(): void {
    if(sessionStorage.getItem("cart")==null){
      this.cart=new Array<Livre>();
    }
    else{
      this.cart=JSON.parse(sessionStorage.getItem("cart"));
    }
    this.livreService.getAll().subscribe({
      next: (data) => {
        this.livres = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur :', err);
        this.loading = false;
      }
    });
  }

  addtocart(id:number){
    this.livreService.getById(id).subscribe({
      next:(data)=>{
        this.tmp=data;
        this.cart.push(this.tmp);
        sessionStorage.setItem("cart",JSON.stringify(this.cart));
        console.log(this.cart);
      }
    });
  }
}
