import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ValidationHelpers } from '../../../utils/ValidationHelpers';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-subscribe',
    templateUrl: './app-subscribe.component.html',
    styleUrls: ['./app-subscribe.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppSubscribeComponent implements OnInit {

    model: any;

    constructor() {
        this.model = {};
    }

    email = new FormControl('', [Validators.required, Validators.email]);
    
    ngOnInit() { }

     onClickSubscribe() {

         if (!this.model.Email) {
             console.log('Email is required', 'Error!');
             return;
         }

         let isValidEmail = ValidationHelpers.validateEmail(this.model.Email);
         if (!isValidEmail) {
           console.log('Invalid email', 'Error!');
             return;
         }

          console.log('It\'s not working yet, sorry :)');
        
     }

    onClickSend() {
    }

    getErrorMessage(){
        return "invalid email";
    }
}
