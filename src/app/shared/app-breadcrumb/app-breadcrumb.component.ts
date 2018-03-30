import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './app-breadcrumb.component.html',
    styleUrls: ['./app-breadcrumb.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppBreadcrumbComponent implements OnInit {

    @Input() path: string;

    constructor() {
        
    }

    ngOnInit() {
        console.log(this.path);

        const routes = this.path.split('/');

        console.log(routes);
    }
}
