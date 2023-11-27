import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { UserDashboardComponent } from './user-dashboard.component';
import { LoaderComponent } from './loader/loader.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { HistoryComponent } from './history/history.component';
import { PaymentPortalComponent } from './payment-portal/payment-portal.component';
import { PaymentComponent } from './payment/payment.component';
import { OrdersComponent } from './orders/orders.component';
import { InteriorDesignComponent } from './interior-design/interior-design.component';
import { InteriorDesignDialogComponent } from './interior-design-dialog/interior-design-dialog.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CreateOrderComponent } from './order/create-order/create-order.component';
import { SuccessfullyCreatedComponent } from './successfully-created/successfully-created.component';


@NgModule({
  declarations: [
    UserDashboardComponent,
    LoaderComponent,
    DashboardComponent,
    ProfileComponent,
    HistoryComponent,
    PaymentPortalComponent,
    PaymentComponent,
    OrdersComponent,
    InteriorDesignComponent,
    InteriorDesignDialogComponent,
    UserProfileComponent,
    CreateOrderComponent,
    SuccessfullyCreatedComponent
  ],
  imports: [
    CommonModule,
    UserDashboardRoutingModule
  ]
})
export class UserDashboardModule { }
