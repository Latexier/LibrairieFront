import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';

import { ProductsComponent } from './components/products/products.component';
import { LivreDetailsComponent } from './components/livre-details/livre-details.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdminClientListeComponent } from './components/admin-client-liste/admin-client-liste.component';
import { AdminClientUpdateComponent } from './components/admin-client-update/admin-client-update.component';
import { LoginComponent } from './components/login/login.component';
import { LoginadminComponent } from './components/loginadmin/loginadmin.component';
import { SignupComponent } from './components/signup/signup.component';
import { PanierComponent } from './components/panier/panier.component';
import { AdminLivresListComponent } from './components/admin-livres-list/admin-livres-list.component';
import { AdminLivreFormComponent } from './components/admin-livre-form/admin-livre-form.component';
import { AdminLivreDetailComponent } from './components/admin-livre-detail/admin-livre-detail.component';
import { CommandesComponent } from './components/commandes/commandes.component';
import { AccountComponent } from './components/account/account.component';
import { AdminCommandesListComponent } from './components/admin-commandes-list/admin-commandes-list.component';
import { AdminCommandeDetailsComponent } from './components/admin-commande-details/admin-commande-details.component';


const routes: Routes = [
  {path:'', component:IndexComponent},
  {path:'products',component:ProductsComponent},
  {path:'product/:id', component: LivreDetailsComponent },
  {path:'contact',component:ContactComponent},
  {path: 'admin/client/liste', component: AdminClientListeComponent },
  {path: 'admin/client/update/:id', component: AdminClientUpdateComponent},
{path:'login',component:LoginComponent},
  {path: 'admin-client-liste', component: AdminClientListeComponent },
  {path: 'admin-client-update', component: AdminClientUpdateComponent},
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
  {path:'admin/commandes',component:AdminCommandesListComponent},
  {path:'admin/commandes/details/:id',component:AdminCommandeDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
