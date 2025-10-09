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
import { AdminLivresListComponent } from './components/admin-livres-list/admin-livres-list.component';
import { AdminLivreFormComponent } from './components/admin-livre-form/admin-livre-form.component';
import { AdminLivreDetailComponent } from './components/admin-livre-detail/admin-livre-detail.component';


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
    AdminLivresListComponent,
    AdminLivreFormComponent,
    AdminLivreDetailComponent
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
