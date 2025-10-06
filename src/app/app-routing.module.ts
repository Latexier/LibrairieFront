import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { ProductsComponent } from './components/products/products.component';
import { LivreDetailsComponent } from './components/livre-details/livre-details.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { LoginadminComponent } from './components/loginadmin/loginadmin.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path:'', component:IndexComponent},
  {path:'products',component:ProductsComponent},
  {path:'product/:id', component: LivreDetailsComponent },
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'loginadmin',component:LoginadminComponent},
  {path:'signup',component:SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
