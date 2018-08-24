import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../../model/Event';
import { EventsMockup } from '../../utils/EventsMockup';
import { List } from 'linqts';
import { AppConfirmDialogComponent } from '../shared/app-confirm-dialog/app-confirm-dialog.component';
import { MatDialog} from '@angular/material';

@Component({
    selector: 'event-page',
    templateUrl: './event-page.component.html',
    styleUrls: ['./event-page.component.css']
})

export class EventPageComponent implements OnInit {

    Events: Event[];

    constructor(public dialog: MatDialog, private router: Router) {

        let eventsMockup = new EventsMockup();
        this.Events = eventsMockup.getEvents();
    }

    ngOnInit() { }

    onClickEditEvent(id: number) {

        this.router.navigateByUrl(`/event/edit/${id}`);
        //this.router.navigate(['/event/edit', id]);
    }

    onClickDeleteEvent(id: number) {

        let dialogRef = this.dialog.open(AppConfirmDialogComponent, {
            width: '400px',
            data: {
                Message: 'Are you sure you want to delete this event ?'
            }
        });

        dialogRef.afterClosed().subscribe(result => {

            if (result) {

                let items = new List<Event>(this.Events).Where(x => x.Id !== id);
                this.Events = items.ToArray();

                console.log('Event was deleted!', 'Success!');
            }
        });
    }
}
