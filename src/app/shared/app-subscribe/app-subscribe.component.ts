import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ValidationHelpers } from '../../../utils/ValidationHelpers';

@Component({
    selector: 'app-subscribe',
    templateUrl: './app-subscribe.component.html',
    styleUrls: ['./app-subscribe.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppSubscribeComponent implements OnInit {

    model: any;

    constructor(public toastr: ToastsManager) {
        this.model = {};
    }

    ngOnInit() { }

    onClickSubscribe() {

        if (!this.model.Email) {
            this.toastr.error('Email is required', 'Error!');
            return;
        }

        let isValidEmail = ValidationHelpers.validateEmail(this.model.Email);
        if (!isValidEmail) {
            this.toastr.error('Invalid email', 'Error!');
            return;
        }

        this.toastr.info('It\'s not working yet, sorry :)');
    }
}
