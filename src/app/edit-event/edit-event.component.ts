import { Component, OnInit } from '@angular/core';
import { EventEntity } from '../../model/EventEntity';
import { baseUrl } from '../../utils/constants';
import { HttpClient } from '@angular/common/http';
import { AlertMessageService } from '../shared/alert-message/alert-message.service';
import { MatDialog } from '@angular/material';
import { EventDialogComponent } from './event-dialog/event-dialog.component';

@Component({
  selector: 'edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})

export class EditEventComponent implements OnInit {

  showSpinner: boolean;
  events: EventEntity[];
  displayedColumns: string[] = ['Actions', 'Title', 'Description', 'Address', 'StartDate', 'Duration', 'IsActive'];

  constructor(private http: HttpClient, private dialog: MatDialog,
    private alertMessageService: AlertMessageService) { }

  ngOnInit() {

    this.fetchEvents();
  }

  fetchEvents() {

    this.showSpinner = true;

    this.http.get(baseUrl + 'Events/GetAll')
      .subscribe(data => {

        this.events = data as EventEntity[];
        this.showSpinner = false;
      }, error => {

        this.showSpinner = false;
        this.alertMessageService.error(error.message);
      });
  }

  onClickIsActive(event) {

    this.showSpinner = true;

    var model = new EventEntity();
    model.Id = event.Id;
    model.IsActive = !event.IsActive;

    this.http.put(baseUrl + 'Events/SetActive/' + event.Id, model)
      .subscribe(data => {

        this.showSpinner = false;
        this.fetchEvents();
      }, error => {

        this.showSpinner = false;
        this.alertMessageService.error(error.message);
      });
  }

  onClickEdit(id) {

    let dialogRef = this.dialog.open(EventDialogComponent, {
      width: '800px',
      maxHeight: '600px',
      data: id,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {

      this.fetchEvents();
    });
  }

  onClickAdd() {
    let dialogRef = this.dialog.open(EventDialogComponent, {
      width: '800px',
      maxHeight: '600px',
      data: 0,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {

      this.fetchEvents();
    });
  }
}
