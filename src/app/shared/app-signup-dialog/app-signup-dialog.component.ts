import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
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
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.model = {};
  }

  onClickCancel(): void {
    this.dialogRef.close();
  }

  onClickSubmit(): void {

    if (!this.model.Name) {
      console.log('Name is required', 'Error!');
      return;
    }

    if (this.model.Name.length < 5) {
      console.log('Name is too short', 'Error!');
      return;
    }

    if (!this.model.Email) {
      console.log('Email is required', 'Error!');
      return;
    }

    let isValidEmail = ValidationHelpers.validateEmail(this.model.Email);

    if (!isValidEmail) {
      console.log('Invalid email', 'Error!');
      return;
    }

    if (this.model.Phone) {
      let isValidPhone = ValidationHelpers.validatePhone(this.model.Phone);

      if (!isValidPhone || this.model.Phone.length < 8) {
        console.log('Invalid phone number', 'Error!');
        return;
      }
    }

    if (!this.model.Password) {
      console.log('Password is required', 'Error!');
      return;
    }

    if (this.model.Password.length < 5) {
      console.log('Password is too short', 'Error!');
      return;
    }

    if (this.model.RepeatPassword !== this.model.Password) {
      console.log('Passwords don\'t match', 'Error!');
      return;
    }

    console.log('An email was sent to your address', 'Success!');
    this.dialogRef.close();
  }
}
