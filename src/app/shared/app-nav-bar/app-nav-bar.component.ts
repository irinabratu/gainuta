import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AppSignupDialogComponent } from '../app-signup-dialog/app-signup-dialog.component';
import { AppLoginDialogComponent } from '../app-login-dialog/app-login-dialog.component';
import { HostListener} from "@angular/core";
import { Product } from '../../../model/Product';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './app-nav-bar.component.html',
    styleUrls: ['./app-nav-bar.component.css']
})

export class AppNavBarComponent implements OnInit {

    isSignedIn: boolean;
    message: any;
    Products: Product[];

    constructor(private router: Router, public dialog: MatDialog) {

        this.isSignedIn = false;
        this.Products = new Array<Product>();

        let products = localStorage.getItem('checkout');
        if(products){
            this.Products = JSON.parse(products);
        }
        else {
            this.Products = new Array<Product>();
        }
    }
    
    ngOnInit() {
    }

    ngOnDestroy() { }

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
        if (!menuElement){
            return;
        }

        let classes = Array.from(menuElement.classList);
        
        let isCollapsed = classes.indexOf('collapsed') >= 0;
        if(!isCollapsed){
            menuElement.click();
        }

        let ulElement = document.getElementById('nav-bar-ul') as HTMLElement;
        if (!ulElement){
            return;
        }

        if(isCollapsed){
            ulElement.classList.add('app-navbar-list');
        }
        else{
            ulElement.classList.remove('app-navbar-list');
        }
    }
}
