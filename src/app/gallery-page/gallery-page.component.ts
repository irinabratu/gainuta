import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'gallery-page',
    templateUrl: './gallery-page.component.html',
    styleUrls: ['./gallery-page.component.css']
})

export class GalleryPageComponent implements OnInit {

    firstDate: Date;
    secondDate: Date;
    thirdDate: Date;

    constructor() {

        this.firstDate = new Date(2017, 10, 21);
        this.secondDate = new Date(2017, 9, 15);
        this.thirdDate = new Date(2017, 6, 8);
    }

    ngOnInit() { }
}
