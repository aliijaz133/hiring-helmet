import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HistoryComponent } from './history/history.component';
import { PaymentComponent } from './payment/payment.component';
import { OrdersComponent } from './orders/orders.component';
import { ServiceOrderComponent } from './service-order/service-order.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { UserListComponent } from './user-list/user-list.component';
import { AuthGuardService } from '../service/auth-guard.service';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: ProfileComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'my-profile',
    component: UserProfileComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'profile-history',
    component: HistoryComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'total-payment',
    component: PaymentComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'orders',
    component: OrdersComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'service-order/find-order',
    component: ServiceOrderComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'create-order',
    component: CreateOrderComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'user-list',
    component: UserListComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: '**',
    redirectTo: 'profile',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserDashboardRoutingModule {}
