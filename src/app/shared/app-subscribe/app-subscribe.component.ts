import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ValidationHelpers } from '../../../utils/ValidationHelpers';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AlertMessageService } from '../../shared/alert-message/alert-message.service';
import { baseUrl } from '../../../utils/constants';

@Component({
  selector: 'app-subscribe',
  templateUrl: './app-subscribe.component.html',
  styleUrls: ['./app-subscribe.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppSubscribeComponent implements OnInit {

  model: any;
  showSpinner: boolean;

  constructor(private http: HttpClient,
    private alertMessageService: AlertMessageService) {

    this.model = {};
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  ngOnInit() { }

  onClickSend() {

    if (!this.model.Email) {
      return;
    }

    let isValidEmail = ValidationHelpers.validateEmail(this.model.Email);
    if (!isValidEmail) {
      return;
    }

    this.showSpinner = true;
    const element = document.querySelector('#preFooter');

    this.http.post(baseUrl + 'Users/Subscribe', this.model)
      .subscribe(data => {

        this.showSpinner = false;
        this.model = {};

        this.alertMessageService.success('Subscription was saved successfully.');
        element.scrollIntoView();
      }, error => {

        this.alertMessageService.error(error.message);
        element.scrollIntoView();
      });
  }

  getErrorMessage() {
    return "invalid email";
  }
}
