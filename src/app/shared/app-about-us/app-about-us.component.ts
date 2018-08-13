import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-about-us',
    templateUrl: './app-about-us.component.html',
    styleUrls: ['./app-about-us.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppAboutUsComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

    onClickDonate() {

      console.log('It\'s not working yet, sorry :)');
    }
}
