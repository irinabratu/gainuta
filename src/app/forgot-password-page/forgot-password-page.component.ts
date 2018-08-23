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
  model: LoginEntity = new LoginEntity();

  constructor(private http: HttpClient, private router: Router,
    private alertMessageService: AlertMessageService) { }

  ngOnInit() { }

  onClickReset() {
    if (!this.model.Email) {
      return;
    }

    this.showSpinner = true;
    debugger;
    this.http.post(baseUrl + 'Users/Reset', this.model)
      .subscribe(data => {

        this.showSpinner = false;
        this.showForm = false;
      }, error => {

        this.showSpinner = false;
        this.alertMessageService.error(error.error);
        const element = document.querySelector('#preFooter');
        element.scrollIntoView();
      });
  }
}
