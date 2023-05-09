namespace EmailSender.Models
{
    public interface IEmailSender
    {
        void SendEmail(List<string> emails,string subject,string message);

    }
}
