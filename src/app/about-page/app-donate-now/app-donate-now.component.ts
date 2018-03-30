import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'app-donate-now',
    templateUrl: './app-donate-now.component.html',
    styleUrls: ['./app-donate-now.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppDonateNowComponent implements OnInit {

    constructor(public toastr: ToastsManager) { }

    ngOnInit() { }

    onClickDonate() {

        this.toastr.info('It\'s not working yet, sorry :)');
    }
}
