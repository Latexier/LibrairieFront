import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';

import { ProductsComponent } from './components/products/products.component';
import { LivreDetailsComponent } from './components/livre-details/livre-details.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdminClientListeComponent } from './components/admin-client-liste/admin-client-liste.component';
import { LoginComponent } from './components/login/login.component';
import { LoginadminComponent } from './components/loginadmin/loginadmin.component';
import { SignupComponent } from './components/signup/signup.component';
import { PanierComponent } from './components/panier/panier.component';
import { AdminLivresListComponent } from './components/admin-livres-list/admin-livres-list.component';
import { AdminLivreFormComponent } from './components/admin-livre-form/admin-livre-form.component';
import { AdminLivreDetailComponent } from './components/admin-livre-detail/admin-livre-detail.component';
import { CommandesComponent } from './components/commandes/commandes.component';
import { AccountComponent } from './components/account/account.component';

const routes: Routes = [
  {path:'', component:IndexComponent},
  {path:'products',component:ProductsComponent},
  {path:'product/:id', component: LivreDetailsComponent },
  {path:'contact',component:ContactComponent},
  {path: 'admin-client-liste', component: AdminClientListeComponent },

  {path:'login',component:LoginComponent},
  {path:'loginadmin',component:LoginadminComponent},
  {path:'signup',component:SignupComponent},
  {path:'cart',component:PanierComponent},
  {path:'admin/livres',component: AdminLivresListComponent},
  {path:'admin/livres/new',component: AdminLivreFormComponent},
  {path:'admin/livres/edit/:id',component: AdminLivreFormComponent},
  {path:'admin/livres/detail/:id',component: AdminLivreDetailComponent },
  {path:'orders',component:CommandesComponent},
  {path:'account',component:AccountComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
