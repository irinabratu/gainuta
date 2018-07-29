import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

    imageUrlArray = [
        { url: 'assets/images/slide2.jpg', caption: 'Studio ae', href: 'http://studioae.ro' },
        { url: 'assets/images/slide3.jpg', caption: 'Studio ae', href: 'http://studioae.ro' },
        { url: 'assets/images/slide5.jpg', caption: 'Studio ae', href: 'http://studioae.ro' },
    ];
    
    constructor() { 
    }

    ngOnInit() { }
}
