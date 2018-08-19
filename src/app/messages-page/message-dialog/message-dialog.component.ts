import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MessageEntity } from '../../../model/MessageEntity';
import { baseUrl } from '../../../utils/constants';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.css']
})

export class MessageDialogComponent implements OnInit {

  showSpinner: boolean;
  model: MessageEntity = new MessageEntity();

  constructor(public dialogRef: MatDialogRef<MessageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number, private http: HttpClient) { }

  ngOnInit() {

    this.http.get(baseUrl + 'Messages/Get/' + this.data).subscribe(data => {
      if (data === null) {
        this.dialogRef.close();
      }

      this.model = data as MessageEntity;
    });
  }

  onClickCancel(): void {

    this.dialogRef.close();
  }

  onClickReply(form: NgForm): void {

    if (form.invalid) {
      return;
    }

    this.showSpinner = true;

    this.http.put(baseUrl + 'Messages/Update', this.model).subscribe(data => {

      this.showSpinner = false;
      this.dialogRef.close();
    });
  }
}
