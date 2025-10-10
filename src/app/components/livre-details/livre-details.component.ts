import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LivreService } from '../../services/livre.service';
import { Livre } from '../../models/livre.model';

@Component({
  selector: 'app-livre-details',
  templateUrl: './livre-details.component.html',
  styleUrls: ['./livre-details.component.css']
})
export class LivreDetailsComponent implements OnInit {
  livre!: Livre;
  livresSimilaires: Livre[] = [];
  loading = true;
  cart:Array<Livre>=new Array<Livre>();
  tmp:Livre;

  constructor(
    private route: ActivatedRoute,
    private livreService: LivreService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(sessionStorage.getItem("cart")==null){
      this.cart=new Array<Livre>();
    }
    else{
      this.cart=JSON.parse(sessionStorage.getItem("cart"));
    }
    this.livreService.getById(id).subscribe({
      next: (data) => {
        this.livre = data;
        this.loading = false;

        this.livreService.getByCategorie(this.livre.Categorie).subscribe({
          next: (sim) => {
            this.livresSimilaires = sim
              .filter(l => l.Id !== id)
              .slice(0, 3);
          },
          error: (err) => console.error(err)
        });
      },
      error: (err) => {
        console.error(err);
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
