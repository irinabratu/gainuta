import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormControl, Validators } from '@angular/forms';
import { HostListener } from "@angular/core";
import { SlideshowModule } from "ng-simple-slideshow";
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule, MatSortModule, MatPaginatorModule, MatProgressSpinnerModule } from "@angular/material";
import { MatFormFieldModule, MatInputModule, MatDialogModule, MatCheckboxModule } from '@angular/material';
//import {
//  MatAutocompleteModule,
//  MatButtonModule,
//  MatButtonToggleModule,
//  MatCardModule,
//  MatCheckboxModule,
//  MatChipsModule,
//  MatDatepickerModule,
//  MatDialogModule,
//  MatExpansionModule,
//  MatGridListModule,
//  MatIconModule,
//  MatInputModule,
//  MatListModule,
//  MatMenuModule,
//  MatNativeDateModule,
//  MatProgressBarModule,
//  MatProgressSpinnerModule,
//  MatRadioModule,
//  MatRippleModule,
//  MatSelectModule,
//  MatSidenavModule,
//  MatSliderModule,
//  MatSlideToggleModule,
//  MatSnackBarModule,
//  MatStepperModule,
//  MatTableModule,
//  MatTabsModule,
//  MatToolbarModule,
//  MatTooltipModule,
//} from '@angular/material';

import { DateTimeFormatPipe } from './pipes/date-time-format.pipe';
import { MessageService } from './services/message.service';
import { LoginService } from './services/login.service';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { AppNavBarComponent } from './shared/app-nav-bar/app-nav-bar.component';
import { AppContactHeaderComponent } from './contact-page/app-contact-header/app-contact-header.component';
import { AppContactMapComponent } from './contact-page/app-contact-map/app-contact-map.component';
import { AppContactFormComponent } from './contact-page/app-contact-form/app-contact-form.component';
import { AppFooterComponent } from './shared/app-footer/app-footer.component';
import { EventPageComponent } from './event-page/event-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { AppEditEventComponent } from './event-page/app-edit-event/app-edit-event.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { AppDonateNowComponent } from './about-page/app-donate-now/app-donate-now.component';
import { AppKeepInTouchComponent } from './about-page/app-keep-in-touch/app-keep-in-touch.component';
import { AppSubscribeComponent } from './shared/app-subscribe/app-subscribe.component';
import { AppAboutUsComponent } from './shared/app-about-us/app-about-us.component';
import { AppConfirmDialogComponent } from './shared/app-confirm-dialog/app-confirm-dialog.component';
import { AppBreadcrumbComponent } from './shared/app-breadcrumb/app-breadcrumb.component';
import { ProductsListComponent } from './products-page/products-list.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { MessagesPageComponent } from './messages-page/messages-page.component';
import { MessageDialogComponent } from './messages-page/message-dialog/message-dialog.component';
import { ProgressSpinnerComponent } from './shared/progress-spinner/progress-spinner.component';
import { AlertMessageService } from './shared/alert-message/alert-message.service';
import { AlertMessageComponent } from './shared/alert-message/alert-message.component';
import { OrdersPageComponent } from './orders-page/orders-page.component';
import { OrderDialogComponent } from './orders-page/oder-dialog/order-dialog.component';
import { ProductDialogComponent } from './products-page/product-dialog/product-dialog.component';
import { NotfoundPageComponent } from './notfound-page/notfound-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ForgotPasswordPageComponent } from './forgot-password-page/forgot-password-page.component';

const appRoutes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'shop', component: ShopPageComponent },
  { path: 'event', component: EventPageComponent },
  { path: 'event/edit/:id', component: AppEditEventComponent },
  { path: 'gallery', component: GalleryPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'contact/:isInvolve', component: ContactPageComponent },
  { path: 'myprofile', component: ProfilePageComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'checkout', component: CheckoutPageComponent },
  { path: 'products', component: ProductsListComponent },
  { path: 'orders', component: OrdersPageComponent },
  { path: 'messages', component: MessagesPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'forgotpassword', component: ForgotPasswordPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotfoundPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactPageComponent,
    AppNavBarComponent,
    ProfilePageComponent,
    AppContactHeaderComponent,
    AppContactMapComponent,
    AppContactFormComponent,
    AppFooterComponent,
    EventPageComponent,
    GalleryPageComponent,
    AppEditEventComponent,
    AboutPageComponent,
    AppDonateNowComponent,
    AppKeepInTouchComponent,
    AppSubscribeComponent,
    AppAboutUsComponent,
    AppConfirmDialogComponent,
    AppBreadcrumbComponent,
    ProductsListComponent,
    ShopPageComponent,
    CheckoutPageComponent,
    AdminPageComponent,
    MessagesPageComponent,
    DateTimeFormatPipe,
    MessageDialogComponent,
    ProgressSpinnerComponent,
    AlertMessageComponent,
    OrdersPageComponent,
    OrderDialogComponent,
    ProductDialogComponent,
    NotfoundPageComponent,
    LoginPageComponent,
    ForgotPasswordPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SlideshowModule,
    MatDialogModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatButtonModule,
    MatCardModule, MatTableModule, MatSortModule, MatPaginatorModule, MatProgressSpinnerModule
  ],
  providers: [
    MessageService,
    LoginService,
    AlertMessageService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AppConfirmDialogComponent,
    MessageDialogComponent,
    OrderDialogComponent,
    ProductDialogComponent
  ]
})

export class AppModule {
}
