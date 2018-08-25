import { Component, OnInit, Inject } from '@angular/core';
import { baseUrl } from '../../utils/constants';
import { EventEntity } from '../../model/EventEntity';
import { HttpClient } from '@angular/common/http';
import { AlertMessageService } from '../shared/alert-message/alert-message.service';

@Component({
  selector: 'event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})

export class EventPageComponent implements OnInit {

  events: EventEntity[];
  showSpinner: boolean;

  constructor(private http: HttpClient, private alertMessageService: AlertMessageService) {

    this.events = new Array<EventEntity>();
  }

  ngOnInit() {

    this.fetchEvents();
  }

  fetchEvents() {

    this.showSpinner = true;
    
    this.http.get(baseUrl + 'Events/GetActive')
      .subscribe(data => {
        
        this.events = data as EventEntity[];
        this.showSpinner = false;
      }, error => {

        this.showSpinner = false;
        this.alertMessageService.error(error.message);
      });
  }
}
