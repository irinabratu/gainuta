import { Component, OnInit } from '@angular/core';
import { EventEntity } from '../../model/EventEntity';
import { baseUrl } from '../../utils/constants';
import { HttpClient } from '@angular/common/http';
import { AlertMessageService } from '../shared/alert-message/alert-message.service';

@Component({
  selector: 'edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})

export class EditEventComponent implements OnInit {

  showSpinner: boolean;
  events: EventEntity[];
  displayedColumns: string[] = ['Actions', 'Title', 'Description', 'Address', 'StartDate', 'Duration', 'IsActive'];

  constructor(private http: HttpClient,
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
