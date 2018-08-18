import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    
    var userToken = localStorage.getItem('userToken');
    if (!userToken) {
      this.router.navigateByUrl('/login');
    }
  }

  onClickMessages() {
    this.router.navigateByUrl('/messages');
  }
}
