import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { EventsMockup } from '../../../utils/events';
import { List } from 'linqts';
import { Event } from '../../../model/Event';


@Component({
  selector: 'app-edit-event',
  templateUrl: './app-edit-event.component.html',
  styleUrls: ['./app-edit-event.component.css']
})

export class AppEditEventComponent implements OnInit {
  id: number;
  breadcrums: string;
  model: any;

  constructor(private route: ActivatedRoute, public router: Router) {

    this.model = {};

    this.route.params.subscribe(params => {

      let eventId = params['id'];
      if (!isNaN(parseInt(eventId))) {
        this.id = parseInt(eventId);

        let eventsMockup = new EventsMockup();
        let events = eventsMockup.getEvents();
        let event = new List<Event>(events).FirstOrDefault(x => x.Id === this.id);

        if (event) {

          this.model = event;
        }
        else if (this.id === 0) {
          return;
        }
        else {
          console.log('Event not found', 'Error!');
          this.router.navigateByUrl('/event');
        }
      }
      else {
        console.log('Event not found', 'Error!');
        this.router.navigateByUrl('/event');
      }
    });
  }

  ngOnInit() { }

  onClickSave() {

    console.log('It\'s not working yet, sorry :)');
  }

  onClickCancel() {

    this.router.navigateByUrl('/event');
  }

  getBreadcrumbPath(): string {

    return (this.id && this.id > 0) ? 'Events/Edit event' : 'Events/Add event';
  }
}
