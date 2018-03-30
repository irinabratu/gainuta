import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'app-about-us',
    templateUrl: './app-about-us.component.html',
    styleUrls: ['./app-about-us.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppAboutUsComponent implements OnInit {

    constructor(public toastr: ToastsManager) { }

    ngOnInit() { }

    onClickDonate() {

        this.toastr.info('It\'s not working yet, sorry :)');
    }
}
