import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { ToastOptions } from 'ng2-toastr';
import { ToastrCustomOption } from '../utils/toastr-custom-option';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, Validators } from '@angular/forms';

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
import { AppLoginDialogComponent } from './shared/app-login-dialog/app-login-dialog.component';
import { AppSignupDialogComponent } from './shared/app-signup-dialog/app-signup-dialog.component';
import { AppConfirmDialogComponent } from './shared/app-confirm-dialog/app-confirm-dialog.component';
import { AppBreadcrumbComponent } from './shared/app-breadcrumb/app-breadcrumb.component';
import { ProductsListComponent } from './products-page/products-list.component';

const appRoutes: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: 'event', component: EventPageComponent },
    { path: 'products', component: ProductsListComponent },
    { path: 'event/edit/:id', component: AppEditEventComponent },
    { path: 'gallery', component: GalleryPageComponent },
    { path: 'about', component: AboutPageComponent },
    { path: 'contact', component: ContactPageComponent },
    { path: 'contact/:isInvolve', component: ContactPageComponent },
    { path: 'myprofile', component: ProfilePageComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: HomePageComponent }
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
        AppLoginDialogComponent,
        AppSignupDialogComponent,
        AppConfirmDialogComponent,
        AppBreadcrumbComponent,
        ProductsListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        BrowserAnimationsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        ToastModule.forRoot(),
    ],
    providers: [{
        provide: ToastOptions,
        useClass: ToastrCustomOption
    }],
    bootstrap: [AppComponent],
    entryComponents: [
        AppSignupDialogComponent,
        AppLoginDialogComponent,
        AppConfirmDialogComponent
    ]
})

export class AppModule {
}
