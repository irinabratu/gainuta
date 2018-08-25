import { Component, OnInit, Inject } from '@angular/core';
import { EventEntity } from '../../../model/EventEntity';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { baseUrl } from '../../../utils/constants';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as moment from "moment";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-event-dialog',
  templateUrl: './event-dialog.component.html',
  styleUrls: ['./event-dialog.component.css']
})
export class EventDialogComponent implements OnInit {

  showSpinner: boolean;
  model: EventEntity = new EventEntity();
  startDate: moment.Moment;
  endDate: moment.Moment;
  startTime: string;
  endTime: string;

  constructor(public dialogRef: MatDialogRef<EventDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number, private http: HttpClient) { }

  ngOnInit() {

    if (this.data === 0)
      return;

    this.showSpinner = true;

    this.http.get(baseUrl + 'Events/Get/' + this.data)
      .subscribe(data => {

        this.model = data as EventEntity;
        this.mapDates();
        this.calculateDuration();

        this.showSpinner = false;
      });
  }

  onClickSave(form: NgForm) {

    this.model.StartDate = this.startDate.toDate();
    this.model.EndDate = this.endDate.toDate();

    if (form.invalid) {
      return;
    }

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

  onChangeStartDate(event: MatDatepickerInputEvent<Date>) {

    this.model.StartDate = this.startDate.toDate();
    this.calculateDuration();
  }

  onChangeEndDate(event: MatDatepickerInputEvent<Date>) {
    
    this.model.EndDate = this.endDate.toDate();
    this.calculateDuration();
  }

  onChangeStartTime() {

    this.calculateDuration();
  }

  onChangeEndTime() {
    
    this.calculateDuration();
  }

  calculateDuration() {

    var temp;
    var indexOfColumn;

    if (!this.startTime || !this.endTime) {
      return;
    }

    indexOfColumn = this.startTime.indexOf(':');
    if (indexOfColumn < 0) {
      return;
    }

    temp = this.startTime.substr(0, indexOfColumn);
    var startH = parseInt(temp);

    temp = this.startTime.substr(indexOfColumn + 1);
    var startM = parseInt(temp);

    if (isNaN(startH) || isNaN(startM)) {
      return;
    }
    
    indexOfColumn = this.endTime.indexOf(':');
    if (indexOfColumn < 0) {
      return;
    }

    temp = this.endTime.substr(0, indexOfColumn);
    var endH = parseInt(temp);

    temp = this.endTime.substr(indexOfColumn + 1);
    var endM = parseInt(temp);

    if (isNaN(endH) || isNaN(endM)) {
      return;
    }

    //const [hours1, minutes1] = this.startTime.split(':');
    //const [hours2, minutes2] = this.endTime.split(':');

    this.startDate.set({ hours: startH, minutes: startM });
    this.endDate.set({ hours: endH, minutes: endM });

    var totalMinutes = this.endDate.diff(this.startDate, 'minutes');
    var minutes = totalMinutes % 60;
    var duration = (totalMinutes - minutes) / 60 + ':' + (minutes < 10 ? '0' + minutes : minutes);
    
    this.model.Duration = duration;
  }                    

  mapDates() {
    
    this.startDate = moment(this.model.StartDate, 'YYYY-MM-DDThh:mm');
    this.endDate = moment(this.model.EndDate, 'YYYY-MM-DDThh:mm');
    
    this.startTime = this.startDate.hours() + ':' + (this.startDate.minutes() < 10 ? '0' + this.startDate.minutes() : this.startDate.minutes());
    this.endTime = this.endDate.hours() + ':' + (this.endDate.minutes() < 10 ? '0' + this.endDate.minutes() : this.endDate.minutes());
  }
}
