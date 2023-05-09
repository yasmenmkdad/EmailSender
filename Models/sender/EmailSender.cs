

using System.Net;
using System.Net.Mail;

namespace EmailSender.Models
{
    public class EmailSender : IEmailSender
    {
        public void SendEmail(List<string> emails, string subject, string messageBox)
        {
            try
            {
                var sender = new { email = "Aman.HR.Example@gmail.com", password = "eeznndukoyeexuac" };

                MailMessage message = new MailMessage();

                message.From = new MailAddress(sender.email);
                foreach (var email in emails)
                {
                    message.To.Add(new MailAddress(email));
                }

                message.Subject = subject;

                message.Body = messageBox;
                message.IsBodyHtml = false;

                var smtpClient = new SmtpClient("smtp.gmail.com")
                {
                    Port = 587,
                    Credentials = new NetworkCredential(sender.email, sender.password),
                    EnableSsl = true,
                };
                smtpClient.Send(message);
            }
            catch (Exception ex)
            {
            }

        }

    }
}