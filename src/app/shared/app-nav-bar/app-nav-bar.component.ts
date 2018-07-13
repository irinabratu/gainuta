import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AppSignupDialogComponent } from '../app-signup-dialog/app-signup-dialog.component';
import { AppLoginDialogComponent } from '../app-login-dialog/app-login-dialog.component';
import { HostListener} from "@angular/core";


@Component({
    selector: 'app-nav-bar',
    templateUrl: './app-nav-bar.component.html',
    styleUrls: ['./app-nav-bar.component.css']
})

export class AppNavBarComponent implements OnInit {

    isSignedIn: boolean;

    constructor(private router: Router, public dialog: MatDialog) {

        this.isSignedIn = false;
    }
    
    ngOnInit() {
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

    @HostListener("window:scroll", [])
    onWindowScroll() {
        debugger;
        var navbar = document.getElementById("navbar");
        var sticky = navbar.offsetTop;
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
          } else {
            navbar.classList.remove("sticky");
          }
    }
}
