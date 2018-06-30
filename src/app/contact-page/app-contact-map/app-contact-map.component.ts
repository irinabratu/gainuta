import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contact-map',
    template: `
    <div class="contact-map">
        <iframe src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJmeuxOT__sUARPVHg2bYvS8Q&key=AIzaSyBoiFQQDW_9U52YOCf_DMzC4f4wRb8BA3I"
            width="100%" height="500px" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>
    `,
    styles: []
})

export class AppContactMapComponent implements OnInit {

    constructor() { }

    ngOnInit() { }
}
