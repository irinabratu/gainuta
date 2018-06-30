import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ValidationHelpers } from '../../../utils/ValidationHelpers';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';

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

    email = new FormControl('', [Validators.required, Validators.email]);

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
    }

    getErrorMessage(){
        return "invalid email";
    }    
}
