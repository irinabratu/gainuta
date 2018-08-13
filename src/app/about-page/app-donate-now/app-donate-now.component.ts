import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-donate-now',
    templateUrl: './app-donate-now.component.html',
    styleUrls: ['./app-donate-now.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppDonateNowComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

    onClickDonate() {

      console.log('It\'s not working yet, sorry');
    }
}
