import { Component, OnInit, Inject } from '@angular/core';
import { baseUrl } from '../../utils/constants';
import { EventEntity } from '../../model/EventEntity';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})

export class EventPageComponent implements OnInit {

  events: EventEntity[];

  constructor(private http: HttpClient) {

    this.events = new Array<EventEntity>();
  }

  ngOnInit() {

    this.fetchEvents();
  }

  fetchEvents() {
    console.log(1);
    this.http.get(baseUrl + 'Events/GetActive')
      .subscribe(data => {

        this.events = data as EventEntity[];
      }, error => {

        console.log(error);
      });
  }
}
