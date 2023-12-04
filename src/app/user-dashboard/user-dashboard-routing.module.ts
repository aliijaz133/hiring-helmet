import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HistoryComponent } from './history/history.component';
import { PaymentComponent } from './payment/payment.component';
import { OrdersComponent } from './orders/orders.component';
import { ServiceOrderComponent } from './service-order/service-order.component';
import { CreateOrderComponent } from './create-order/create-order.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: ProfileComponent,
  },
  {
    path: 'my-profile',
    component: UserProfileComponent,
  },
  {
    path: 'profile-history',
    component: HistoryComponent,
  },
  {
    path: 'total-payment',
    component: PaymentComponent,
  },
  {
    path: 'orders',
    component: OrdersComponent,
  },
  {
    path: 'service-order/find-order',
    component: ServiceOrderComponent,
  },
  {
    path: 'create-order',
    component: CreateOrderComponent
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
