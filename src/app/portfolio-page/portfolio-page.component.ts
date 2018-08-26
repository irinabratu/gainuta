import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.css']
})

export class PortfolioPageComponent implements OnInit {

  showSpinner: boolean;

  constructor() { }

  ngOnInit() {
  }
}
