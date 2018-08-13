import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ValidationHelpers } from '../../../utils/ValidationHelpers';

@Component({
    selector: 'app-keep-in-touch',
    templateUrl: './app-keep-in-touch.component.html',
    styleUrls: ['./app-keep-in-touch.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppKeepInTouchComponent implements OnInit {

    model: any;

    constructor() {

        this.model = {};
    }

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
}
