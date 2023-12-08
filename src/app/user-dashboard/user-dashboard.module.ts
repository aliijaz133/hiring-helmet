import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { UserDashboardComponent } from './user-dashboard.component';
import { LoaderComponent } from './loader/loader.component';
import { ProfileComponent } from './profile/profile.component';
import { HistoryComponent } from './history/history.component';
import { PaymentComponent } from './payment/payment.component';
import { OrdersComponent } from './orders/orders.component';
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
import { LoaderGifComponent } from './loader-gif/loader-gif.component';
import { MatMenuModule } from '@angular/material/menu';
import { UserListComponent } from './user-list/user-list.component';
import { TokenLengthPipe } from './pipes/token-length.pipe';
@NgModule({
  declarations: [
    UserDashboardComponent,
    LoaderComponent,
    ProfileComponent,
    HistoryComponent,
    PaymentComponent,
    OrdersComponent,
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
    LoaderGifComponent,
    UserListComponent,
    TokenLengthPipe,
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
    MatMenuModule,
  ],
})
export class UserDashboardModule {}
