import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'notfound-page',
  templateUrl: './notfound-page.component.html',
  styleUrls: ['./notfound-page.component.css']
})
export class NotfoundPageComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() { }

  onClickBackHome() {

    this.router.navigateByUrl('/home');
  }
}
