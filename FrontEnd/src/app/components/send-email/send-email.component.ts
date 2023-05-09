import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { EmailBody } from 'src/app/models/email-body';
import { EmailService } from 'src/app/services/http/email/email.service';
import { MessageService } from 'src/app/services/http/message/message.service';
import { HomeComponent } from '../home/home.component';

let regexEmailPattern = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css'],
})
export class SendEmailComponent implements OnInit {
  constructor(
    private _emailService: EmailService,
    private _msgService: MessageService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      const selectedChartId = +params['id'];
      console.log(params);
    });
  }
  emails: string[] = [''];
  message!: EmailBody;
  ngOnInit(): void {
    let MsgID = this.route.snapshot.params['id'];

    this._msgService.Get(MsgID).subscribe((data) => {
      this.message = data;
    });
  }
  addEmail() {
    this.emails.push('');
  }
  send() {
    console.log('Send');

    this.emails.forEach((address, index) => {
      if (!regexEmailPattern.test(address)) {
        this.emails.splice(index, 1);
      }
    });

    if (
      this.emails.length > 0 &&
      this.message &&
      this.message.subject &&
      this.message.message
    ) {
      this._emailService
        .send({ emails: this.emails, body: this.message })
        .subscribe((sucessFlag) => {
          // if (sucessFlag) {
          this.route.component = HomeComponent;
          // }
        });
    } else if (this.emails.length <= 0) alert('please enter emails');
    else alert('error please try again later');
  }

  editEmail(index: number, event: any) {
    this.emails[index] = event.target.value;
  }
}
