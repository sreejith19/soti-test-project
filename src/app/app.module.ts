import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingodule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category/category.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SubcategoryComponent } from './components/subcategory/subcategory.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginComponent } from './components/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    HeaderComponent,
    NavbarComponent,
    HomePageComponent,
    ProductPageComponent,
    ContactPageComponent,
    AboutPageComponent,
    SubcategoryComponent,
    ProductsComponent,
    ProductDetailPageComponent,
    ProductDetailComponent,
    ErrorPageComponent,
    RegisterPageComponent,
    RegisterComponent,
    LoginPageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingodule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
