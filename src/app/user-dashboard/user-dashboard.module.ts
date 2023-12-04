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
import { ServiceOrderComponent } from './service-order/service-order.component';
import { DragimageComponent } from './dragimage/dragimage.component';
import { CreatedSuccessfullyComponent } from './created-successfully/created-successfully.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { MatRadioModule } from '@angular/material/radio';
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
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CreditCardComponent,
    OnetimepaymentComponent,
    MilestonewiseorderComponent,
    SubscribedorderComponent,
    RecurringorderComponent,
    ServiceOrderComponent,
    DragimageComponent,
    CreatedSuccessfullyComponent,
    CreateOrderComponent,
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
    MatRadioModule,
  ],
})
export class UserDashboardModule {}
