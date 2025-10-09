import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';

import { ProductsComponent } from './components/products/products.component';
import { LivreDetailsComponent } from './components/livre-details/livre-details.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdminClientListeComponent } from './components/admin-client-liste/admin-client-liste.component';
import { AdminClientUpdateComponent } from './components/admin-client-update/admin-client-update.component';

const routes: Routes = [
  {path:'', component:IndexComponent},
  {path:'products',component:ProductsComponent},
  {path:'product/:id', component: LivreDetailsComponent },
  {path:'contact',component:ContactComponent},
  {path: 'admin-client-liste', component: AdminClientListeComponent },
  {path: 'admin-client-update', component: AdminClientUpdateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
