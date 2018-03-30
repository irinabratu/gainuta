import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ValidationHelpers } from '../../../utils/ValidationHelpers';

@Component({
    selector: 'app-login-dialog',
    templateUrl: './app-login-dialog.component.html',
    styleUrls: ['./app-login-dialog.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppLoginDialogComponent implements OnInit {
    isReset: boolean;
    model: any;

    constructor(public dialogRef: MatDialogRef<AppLoginDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any, public toastr: ToastsManager) { }

    ngOnInit() {

        this.isReset = false;
        this.model = {};
    }

    onClickCancel(): void {

        this.dialogRef.close();
    }

    onClickSubmit(): void {

        if (!this.model.Email) {
            this.toastr.error('Email is required', 'Error!');
            return;
        }

        let isValidEmail = ValidationHelpers.validateEmail(this.model.Email);
        
        if (this.isReset) {

            if (!isValidEmail) {
                this.toastr.error('Invalid email', 'Error!');
                return;
            }
            else {
                this.toastr.success('An email was sent to your address', 'Success!');
                this.dialogRef.close();
            }            
        }
        else {
            if (!isValidEmail) {
                this.toastr.error('Invalid email', 'Error!');
                return;
            }

            if (!this.model.Password) {
                this.toastr.error('Password is required', 'Error!');
                return;
            }

            this.toastr.info('It\'s not working yet, sorry :)');
            //this.toastr.error('Wrong email or password', 'Error!'); // todo remove and log in
        }
    }

    onClickForgotPassword() {

        this.isReset = true;
    }
}
