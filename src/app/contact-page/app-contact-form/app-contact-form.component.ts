import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ValidationHelpers } from '../../../utils/ValidationHelpers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../../../utils/constants';
import { NgForm, NgControl, AbstractControl } from '@angular/forms';
import { AlertMessageService } from '../../shared/alert-message/alert-message.service';

@Component({
    selector: 'app-contact-form',
    templateUrl: './app-contact-form.component.html',
    styleUrls: ['./app-contact-form.component.css'],
})

export class AppContactFormComponent implements OnInit {

    model: any;
    isInvolve: boolean;
    showSpinner: boolean;
    private subscribe: any;
    @ViewChild('Name') nameElement: ElementRef;

    constructor(private route: ActivatedRoute, private http: HttpClient,
      private alertMessageService: AlertMessageService) {
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

    onClickSend(form: NgForm) {

      if (form.invalid) {
        return;
      }

      this.showSpinner = true;
      
      this.http.post(baseUrl + 'Messages/Add', this.model).subscribe(response => {
        
        this.showSpinner = false;
        this.alertMessageService.success('Message was sent successfully.');

        this.model = {};
        form.resetForm();
      });
    }

    getErrorMessage(formControl: AbstractControl) {
      
      formControl.markAsPristine();
      formControl.markAsUntouched();

      if (!this.model.Email)
        return '';
      
      return "Invalid email";
    }

}
