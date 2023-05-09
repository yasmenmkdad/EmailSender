import { EmailBody } from './email-body';

export interface EmailForm {
  emails: string[];
  body: EmailBody;
}
