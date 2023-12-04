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
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { MatTabsModule } from '@angular/material/tabs';
import { OnetimepaymentComponent } from './rate-detail/onetimepayment/onetimepayment.component';
import { MilestonewiseorderComponent } from './rate-detail/milestonewiseorder/milestonewiseorder.component';
import { SubscribedorderComponent } from './rate-detail/subscribedorder/subscribedorder.component';
import { RecurringorderComponent } from './rate-detail/recurringorder/recurringorder.component';
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
    SuccessfullyCreatedComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CreditCardComponent,
    OnetimepaymentComponent,
    MilestonewiseorderComponent,
    SubscribedorderComponent,
    RecurringorderComponent,
  ],
  imports: [
    CommonModule,
    UserDashboardRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatDialogModule,
    MatTabsModule,
  ],
})
export class UserDashboardModule {}
