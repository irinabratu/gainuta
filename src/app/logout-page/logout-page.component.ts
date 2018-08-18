import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-logout-page',
  templateUrl: './logout-page.component.html',
  styleUrls: ['./logout-page.component.css']
})
export class LogoutPageComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() { }

  onClickLogout() {

    localStorage.removeItem('userToken');
    this.loginService.sendLoginAction(false);
    this.router.navigateByUrl('/home');
  }
}
