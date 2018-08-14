import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ValidationHelpers } from '../../../utils/ValidationHelpers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../../../utils/constants';

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

    constructor(private route: ActivatedRoute, private http: HttpClient) {
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
      
      this.http.post(baseUrl + 'Messages/Add', this.model).subscribe(response => {
        console.log('Message with Id: ' + response + ' was sent');
      });
    }

    getErrorMessage(){
        return "invalid email";
    }

}
