import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { HostListener } from "@angular/core";
import { Product } from '../../../model/Product';
import { Subscription } from 'rxjs/Subscription';
import { MessageService } from '../../services/message.service';
import { LoginService } from '../../services/login.service';
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
  cartSubscription: Subscription;
  loginSubscription: Subscription;

  constructor(private router: Router, private loginService: LoginService,
    private http: HttpClient,
    private messageService: MessageService) {

    this.isSignedIn = false;
    this.cartCount = 0;
  }

  ngOnInit() {

    this.fetchCartCount();
    this.setIsSignedIn();

    this.cartSubscription = this.messageService.getProduct()
      .subscribe(data => {
        debugger;
        if (data) {          
          this.fetchCartCount();
        }
      });

    this.loginSubscription = this.loginService.getLoginAction()
      .subscribe(data => {

        this.setIsSignedIn();
      });
  }

  setIsSignedIn() {
    
    var userToken = localStorage.getItem('userToken');
    if (userToken != null) {
      this.isSignedIn = true;
    }
    else {
      this.isSignedIn = false;
    }
  }

  fetchCartCount() {

    this.http.get(baseUrl + 'ShoppingCart/GetCount/' + this.userId)
      .subscribe(data => {
        this.cartCount = data as number;
      });
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
    this.loginSubscription.unsubscribe();
  }

  getNavItemClass(navItem: string) {

    const currentUrl = this.router.url;

    if (currentUrl.indexOf(navItem) >= 0)
      return 'active';

    return 'inactive';
  }

  onClickLogIn() {

    this.router.navigateByUrl('/login');
  }
  

  onClickLogout() {

    localStorage.removeItem('userToken');
    this.isSignedIn = false;
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
