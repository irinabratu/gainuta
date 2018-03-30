import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ValidationHelpers } from '../../../utils/ValidationHelpers';

@Component({
    selector: 'app-signup-dialog',
    templateUrl: './app-signup-dialog.component.html',
    styleUrls: ['./app-signup-dialog.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppSignupDialogComponent implements OnInit {

    model: any;

    constructor(public dialogRef: MatDialogRef<AppSignupDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any, public toastr: ToastsManager) { }

    ngOnInit() {
        this.model = {};
    }

    onClickCancel(): void {
        this.dialogRef.close();
    }

    onClickSubmit(): void {

        if (!this.model.Name) {
            this.toastr.error('Name is required', 'Error!');
            return;
        }

        if (this.model.Name.length < 5) {
            this.toastr.error('Name is too short', 'Error!');
            return;
        }

        if (!this.model.Email) {
            this.toastr.error('Email is required', 'Error!');
            return;
        }

        let isValidEmail = ValidationHelpers.validateEmail(this.model.Email);
        
        if (!isValidEmail) {
            this.toastr.error('Invalid email', 'Error!');
            return;
        }

        if (this.model.Phone) {
            let isValidPhone = ValidationHelpers.validatePhone(this.model.Phone);

            if (!isValidPhone || this.model.Phone.length < 8) {
                this.toastr.error('Invalid phone number', 'Error!');
                return;
            }
        }
                
        if (!this.model.Password) {
            this.toastr.error('Password is required', 'Error!');
            return;
        }

        if (this.model.Password.length < 5) {
            this.toastr.error('Password is too short', 'Error!');
            return;
        }
        
        if (this.model.RepeatPassword !== this.model.Password) {
            this.toastr.error('Passwords don\'t match', 'Error!');
            return;
        }
        
        this.toastr.success('An email was sent to your address', 'Success!');
        this.dialogRef.close();
    }
}
