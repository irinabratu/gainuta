import { Component, OnInit, Inject } from '@angular/core';
import { EventEntity } from '../../../model/EventEntity';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { baseUrl } from '../../../utils/constants';

@Component({
  selector: 'app-event-dialog',
  templateUrl: './event-dialog.component.html',
  styleUrls: ['./event-dialog.component.css']
})
export class EventDialogComponent implements OnInit {

  showSpinner: boolean;
  model: EventEntity = new EventEntity();

  constructor(public dialogRef: MatDialogRef<EventDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number, private http: HttpClient) { }

  ngOnInit() {

    if (this.data === 0)
      return;

    this.showSpinner = true;

    this.http.get(baseUrl + 'Events/Get/' + this.data)
      .subscribe(data => {

        this.model = data as EventEntity;
        this.showSpinner = false;
      });
  }

  onClickSave() {

    this.showSpinner = true;

    if (this.data === 0) {

      this.http.post(baseUrl + 'Events/Add', this.model)
        .subscribe(data => {

          this.showSpinner = false;
          this.dialogRef.close();
        });
    }
    else {

      this.http.put(baseUrl + 'Events/Update/' + this.model.Id, this.model)
        .subscribe(data => {

          this.showSpinner = false;
          this.dialogRef.close();
        });
    }
  }

  onClickCancel() {

    this.dialogRef.close();
  }
}
