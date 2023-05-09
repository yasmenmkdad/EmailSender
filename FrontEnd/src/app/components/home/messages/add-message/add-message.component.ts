import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MessageService } from 'src/app/services/http/message/message.service';

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.css'],
})
export class AddMessageComponent implements OnInit {
  constructor(private _msgService: MessageService) {}
  EmailForm!: FormGroup;
  submitted: boolean = false;
  @Output() AddNewMessage: EventEmitter<void> = new EventEmitter();

  ngOnInit() {
    this.EmailForm = new FormGroup({
      subject: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
    });
  }

  onSubmit(form: FormGroup) {
    this.submitted = true;

    if (form.valid) {
      this._msgService
        .Add({
          id: -1,
          subject: form.value.subject,
          message: form.value.message,
        })
        .subscribe((flag) => {
          if (!flag) alert('Has same message');
          else {
            this.AddNewMessage.emit();
          }
        });

      this.submitted = false;
    }
  }
}
