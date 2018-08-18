import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { baseUrl } from '../../utils/constants';
import { LoginEntity } from '../../model/LoginEntity';
import { AlertMessageService } from '../shared/alert-message/alert-message.service';


@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  showSpinner: boolean;
  model: LoginEntity = new LoginEntity();

  constructor(private http: HttpClient, private router: Router,
    private alertMessageService: AlertMessageService) { }

  ngOnInit() { }

  onClickLogin() {
    console.log(this.model);
    if (!this.model.Email || !this.model.Password)
      return;

    this.showSpinner = true;

    this.http.post(baseUrl + 'Users/Login', this.model).subscribe(data => {
      if (data != null) {

        localStorage.setItem('userToken', data.toString());
        this.showSpinner = false;
        this.router.navigateByUrl('/admin');
      }
      else {

        this.showSpinner = false;
        this.alertMessageService.error('Wrong credentials.');
        const element = document.querySelector('#preFooter');
        element.scrollIntoView();
      }
    }, error => {
      this.showSpinner = false;
      this.alertMessageService.error(error.message);
      });
  }
}
