import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-message-popup',
  templateUrl: './message-popup.component.html',
  styleUrls: ['./message-popup.component.css']
})

export class MessagePopupComponent implements OnInit {

  model: any;

  constructor(public dialogRef: MatDialogRef<MessagePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.model = {};
  }

  onClickCancel(): void {

    this.dialogRef.close();
  }

  onClickSubmit(): void {

    this.dialogRef.close();
  }
}
