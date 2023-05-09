import { Component, Input, OnInit } from '@angular/core';
import { EmailBody } from 'src/app/models/email-body';
import { MessageService } from 'src/app/services/http/message/message.service';

@Component({
  selector: 'app-show-messages',
  templateUrl: './show-messages.component.html',
  styleUrls: ['./show-messages.component.css'],
})
export class ShowMessagesComponent {
  @Input() isrefresh!: boolean;

  displayedColumns: string[] = ['subject', 'message', 'actions'];
  data!: EmailBody[];

  constructor(private _messageService: MessageService) {
    this.readMessages();
  }

  ngOnChanges(changes: any): void {
    if (changes.isrefresh) this.readMessages();
  }

  readMessages() {
    this._messageService.GetAll().subscribe((data) => {
      this.data = data;
    });
  }
}
