import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router"
import { RegisterComponent } from "./components/register/register.component";
import { AboutPageComponent } from "./pages/about-page/about-page.component";
import { ContactPageComponent } from "./pages/contact-page/contact-page.component";
import { ErrorPageComponent } from "./pages/error-page/error-page.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { ProductDetailPageComponent } from "./pages/product-detail-page/product-detail-page.component";
import { ProductPageComponent } from "./pages/product-page/product-page.component";
import { RegisterPageComponent } from "./pages/register-page/register-page.component";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { AuthGuard } from "./guards/auth.guard";

const routes:Routes=[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomePageComponent},
    {path:'products/details/:id',component:ProductDetailPageComponent, canActivate:[AuthGuard]},
    {path:'products/:catId/:subId',component:ProductPageComponent, canActivate:[AuthGuard]},
    {path:'products/:catId',component:ProductPageComponent, canActivate:[AuthGuard]},
    {path:'products',component:ProductPageComponent, canActivate:[AuthGuard]},
    {path:'contact',component:ContactPageComponent, canActivate:[AuthGuard]},
    {path:'about',component:AboutPageComponent},
    {path:'register',component:RegisterPageComponent},
    {path:'login',component:LoginPageComponent},
    {path:'**',component:ErrorPageComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingodule{
    constructor(){

    }
}