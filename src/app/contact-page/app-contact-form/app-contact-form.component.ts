import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ValidationHelpers } from '../../../utils/ValidationHelpers';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'app-contact-form',
    templateUrl: './app-contact-form.component.html',
    styleUrls: ['./app-contact-form.component.css'],
})

export class AppContactFormComponent implements OnInit {

    model: any;
    isInvolve: boolean;
    private subscribe: any;
    @ViewChild('Name') nameElement: ElementRef;

    constructor(private route: ActivatedRoute, public toastr: ToastsManager) {
        this.model = {};
    }

    ngOnInit() {

        this.subscribe = this.route.params.subscribe(params => {
            let param = params['isInvolve'];
            this.isInvolve = param === 'true';
        });
    }

    ngAfterViewInit() {

        if (this.isInvolve)
            this.nameElement.nativeElement.focus();
    }

    ngOnDestroy() {
        this.subscribe.unsubscribe();
    }

    onClickSend() {

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

        if (!this.model.Message) {
            this.toastr.error('Message is required', 'Error!');
            return;
        }

        if (this.model.Message.length < 10) {
            this.toastr.error('Message is too short', 'Error!');
            return;
        }
        
        this.toastr.info('It\'s not working yet, sorry :)');
        this.model = {};
        //this.toastr.success('An email was sent to your address', 'Success!');
    }
}
