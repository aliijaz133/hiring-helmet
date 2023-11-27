import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HiringHelmetComponent } from './hiring-helmet/hiring-helmet.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LoaderComponent } from './loader/loader.component';
import { AboutInfoComponent } from './about-info/about-info.component';
import { CategoriesComponent } from './categories/categories.component';
import { AboutServiceComponent } from './about-service/about-service.component';

@NgModule({
  declarations: [
    AppComponent,
    HiringHelmetComponent,
    SignupComponent,
    LoginComponent,
    LoaderComponent,
    AboutInfoComponent,
    CategoriesComponent,
    AboutServiceComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
