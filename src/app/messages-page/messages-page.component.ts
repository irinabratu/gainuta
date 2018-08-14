import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageEntity } from '../../model/MessageEntity';
import { baseUrl } from '../../utils/constants';
import { DataSource } from '@angular/cdk/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';

@Component({
  selector: 'messages-page',
  templateUrl: './messages-page.component.html',
  styleUrls: ['./messages-page.component.css']
})

export class MessagesPageComponent implements OnInit {

  messages: MessageEntity[];
  displayedColumns: string[] = ['Name', 'Email', 'Phone', 'CreateDate', 'Message', 'Answer', 'Actions'];

  constructor(private http: HttpClient, public dialog: MatDialog) { }

  ngOnInit() {
    
    this.refreshMessagesGrid();
  }

  onClickReply(id: number) {
    
    let dialogRef = this.dialog.open(MessageDialogComponent, {
      width: '800px',
      data: id
    });

    dialogRef.afterClosed().subscribe(result => {
      this.refreshMessagesGrid();
    });
  }

  refreshMessagesGrid() {

    this.http.get(baseUrl + 'Messages/GetAll').subscribe(data => {
      this.messages = data as MessageEntity[];
    });
  }
}
