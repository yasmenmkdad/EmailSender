namespace EmailSender.Models
{
    public class EmailForm
    {
        public List<string> emails { get; set; }
        public MailBody body { get; set; }
    }
}
