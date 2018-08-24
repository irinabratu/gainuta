import { Component, OnInit } from '@angular/core';
import { EventEntity } from '../../model/EventEntity';
import { baseUrl } from '../../utils/constants';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})

export class EditEventComponent implements OnInit {

  events: EventEntity[];

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.fetchEvents();
  }

  fetchEvents() {
    
    this.http.get(baseUrl + 'Events/GetAll')
      .subscribe(data => {

        this.events = data as EventEntity[];
      }, error => {

        console.log(error);
      });
  }
}
