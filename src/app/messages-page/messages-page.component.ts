import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageEntity } from '../../model/MessageEntity';
import { baseUrl } from '../../utils/constants';

@Component({
  selector: 'messages-page',
  templateUrl: './messages-page.component.html',
  styleUrls: ['./messages-page.component.css']
})

export class MessagesPageComponent implements OnInit {

  messages: MessageEntity[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(baseUrl + 'Messages/GetAll').subscribe(data => {
      this.messages = data as MessageEntity[];
    });
  }
}
