import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
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
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {

    this.isReset = false;
    this.model = {};
  }

  onClickCancel(): void {

    this.dialogRef.close();
  }

  onClickSubmit(): void {

    if (!this.model.Email) {
      console.log('Email is required', 'Error!');
      return;
    }

    let isValidEmail = ValidationHelpers.validateEmail(this.model.Email);

    if (this.isReset) {

      if (!isValidEmail) {
        console.log('Invalid email', 'Error!');
        return;
      }
      else {
        console.log('An email was sent to your address', 'Success!');
        this.dialogRef.close();
      }
    }
    else {
      if (!isValidEmail) {
        console.log('Invalid email', 'Error!');
        return;
      }

      if (!this.model.Password) {
        console.log('Password is required', 'Error!');
        return;
      }

      console.log('It\'s not working yet, sorry :)');
    }
  }

  onClickForgotPassword() {

    this.isReset = true;
  }
}
