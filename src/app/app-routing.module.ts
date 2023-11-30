import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HiringHelmetComponent } from './hiring-helmet/hiring-helmet.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CategoriesComponent } from './categories/categories.component';
import { InteriorDesignComponent } from './interior-design/interior-design.component';

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
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'all-categories',
    component: CategoriesComponent,
  },
  {
    path: 'find-service',
    component: InteriorDesignComponent,
  },
  {
    path: 'user-dashboard',
    loadChildren: () =>
      import('./user-dashboard/user-dashboard.module').then(
        (u) => u.UserDashboardModule
      ),
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
