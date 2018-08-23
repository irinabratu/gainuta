import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { baseUrl } from '../../utils/constants';
import { LoginEntity } from '../../model/LoginEntity';
import { AlertMessageService } from '../shared/alert-message/alert-message.service';

@Component({
  selector: 'forgot-password-page',
  templateUrl: './forgot-password-page.component.html',
  styleUrls: ['./forgot-password-page.component.css']
})
export class ForgotPasswordPageComponent implements OnInit {

  showSpinner: boolean;
  showForm: boolean = true;
  email: string;

  constructor(private http: HttpClient, private router: Router,
    private alertMessageService: AlertMessageService) { }

  ngOnInit() { }

  onClickReset() {
    if (!this.email) {
      return;
    }

    this.showSpinner = true;

    this.http.post(baseUrl + 'Users/Reset', this.email)
      .subscribe(data => {

        this.showSpinner = false;

        if (data != null) {
          this.showForm = false;
        }
        else {
          this.alertMessageService.error("Email is not in our system");
          const element = document.querySelector('#preFooter');
          element.scrollIntoView();
        }      
      }, error => {

        this.showSpinner = false;
        this.alertMessageService.error(error.message);
        const element = document.querySelector('#preFooter');
        element.scrollIntoView();
      });
  }
}
