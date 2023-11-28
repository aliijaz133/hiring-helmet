import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HiringHelmetComponent } from './hiring-helmet/hiring-helmet.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'hiring-helmet',
    pathMatch: 'full',
  },
  {
    path: 'hiring-helmet',
    component: HiringHelmetComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: 'hiring-helmet',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
