import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { ProductsComponent } from './components/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { LivreDetailsComponent } from './components/livre-details/livre-details.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { LoginadminComponent } from './components/loginadmin/loginadmin.component';
import { SignupComponent } from './components/signup/signup.component';
import { PanierComponent } from './components/panier/panier.component';
import { AdminClientListeComponent } from './components/admin-client-liste/admin-client-liste.component';
<<<<<<< HEAD
import { AdminClientUpdateComponent } from './components/admin-client-update/admin-client-update.component';
=======
import { AdminLivresListComponent } from './components/admin-livres-list/admin-livres-list.component';
import { AdminLivreFormComponent } from './components/admin-livre-form/admin-livre-form.component';
import { AdminLivreDetailComponent } from './components/admin-livre-detail/admin-livre-detail.component';
import { AccountComponent } from './components/account/account.component';
import { CommandesComponent } from './components/commandes/commandes.component';
>>>>>>> e724d0e7493a5ad31d29f0accaf8d05240d6faf2


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    LivreDetailsComponent,
    ContactComponent,
    LoginComponent,
    LoginadminComponent,
    SignupComponent,
    PanierComponent,
    AdminClientListeComponent,
<<<<<<< HEAD
    AdminClientUpdateComponent
=======
    AdminLivresListComponent,
    AdminLivreFormComponent,
    AdminLivreDetailComponent,
    AccountComponent,
    CommandesComponent
>>>>>>> e724d0e7493a5ad31d29f0accaf8d05240d6faf2
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
