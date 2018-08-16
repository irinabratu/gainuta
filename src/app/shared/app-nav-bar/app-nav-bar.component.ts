import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AppSignupDialogComponent } from '../app-signup-dialog/app-signup-dialog.component';
import { AppLoginDialogComponent } from '../app-login-dialog/app-login-dialog.component';
import { HostListener } from "@angular/core";
import { Product } from '../../../model/Product';
import { Subscription } from 'rxjs/Subscription';
import { MessageService } from '../../services/message.service';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../../../utils/constants';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './app-nav-bar.component.html',
  styleUrls: ['./app-nav-bar.component.css']
})

export class AppNavBarComponent implements OnInit {

  isSignedIn: boolean;
  userId = 1;
  cartCount: number;
  Products: Product[];
  subscription: Subscription;
  clearSubscription: Subscription;

  constructor(private router: Router, public dialog: MatDialog,
    private messageService: MessageService, private http: HttpClient) {

    this.isSignedIn = false;
    this.cartCount = 0;
  }

  ngOnInit() {

    this.fetchCartCount();

    this.subscription = this.messageService.getProduct()
      .subscribe(data => {
        if (data) {

          localStorage.removeItem('checkout'); // todo remove
          this.fetchCartCount();
        }
        else {
          // todo clear cart
          localStorage.removeItem('checkout');
        }
      });
  }

  fetchCartCount() {

    this.http.get(baseUrl + 'ShoppingCart/GetCount/' + this.userId)
      .subscribe(data => {
        this.cartCount = data as number;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.clearSubscription.unsubscribe(); // todo remove
  }

  getNavItemClass(navItem: string) {

    const currentUrl = this.router.url;

    if (currentUrl.indexOf(navItem) >= 0)
      return 'active';

    return 'inactive';
  }

  onClickLogIn() {

    let dialogRef = this.dialog.open(AppLoginDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

    this.router.navigateByUrl('/home');
  }

  onClickLogOut() {

    this.isSignedIn = false;
    this.router.navigateByUrl('/home');
  }

  onClickSignUp() {

    console.log('onClickSignUp');

    let dialogRef = this.dialog.open(AppSignupDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

    this.router.navigateByUrl('/home');
  }

  onClickMenu() {
    let menuElement = document.getElementById('menu-button') as HTMLElement;
    if (!menuElement) {
      return;
    }

    let classes = Array.from(menuElement.classList);

    let isCollapsed = classes.indexOf('collapsed') >= 0;
    if (!isCollapsed) {
      menuElement.click();
    }

    let ulElement = document.getElementById('nav-bar-ul') as HTMLElement;
    if (!ulElement) {
      return;
    }

    if (isCollapsed) {
      ulElement.classList.add('app-navbar-list');
    }
    else {
      ulElement.classList.remove('app-navbar-list');
    }
  }
}
