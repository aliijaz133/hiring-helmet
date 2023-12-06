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
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatChipsModule } from '@angular/material/chips';
import { WhyUsComponent } from './why-us/why-us.component';
import { ImageGroupComponent } from './image-group/image-group.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { InteriorDesignComponent } from './interior-design/interior-design.component';

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
    HeaderComponent,
    FooterComponent,
    WhyUsComponent,
    ImageGroupComponent,
    AboutUsComponent,
    InteriorDesignComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    HttpClientModule,
    MatChipsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
