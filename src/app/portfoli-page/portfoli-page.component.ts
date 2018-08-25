import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portfoli-page',
  templateUrl: './portfoli-page.component.html',
  styleUrls: ['./portfoli-page.component.css']
})

export class PortfoliPageComponent implements OnInit {

  showSpinner: boolean;

  constructor() { }

  ngOnInit() {
  }
}
