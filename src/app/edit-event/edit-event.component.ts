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
  //public dialog: MatDialog
  //  import { MatDialog } from '@angular/material';
  //import { AppConfirmDialogComponent } from '../shared/app-confirm-dialog/app-confirm-dialog.component';
  //onClickDeleteEvent(id: number) {

  //    let dialogRef = this.dialog.open(AppConfirmDialogComponent, {
  //        width: '400px',
  //        data: {
  //            Message: 'Are you sure you want to delete this event ?'
  //        }
  //    });

  //    dialogRef.afterClosed().subscribe(result => {

  //        if (result) {

  //            let items = new List<Event>(this.Events).Where(x => x.Id !== id);
  //            this.Events = items.ToArray();

  //            console.log('Event was deleted!', 'Success!');
  //        }
  //    });
  //}
