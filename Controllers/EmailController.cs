using EmailSender.Models;
using Microsoft.AspNetCore.Mvc;

namespace EmailSender.Controllers
{
    public class EmailController : Controller
    {
        private readonly IEmailSender _emailSender;
        public EmailController(IEmailSender emailSender)
        {
            _emailSender = emailSender;
        }
        [HttpPost]
        public IActionResult send([FromBody]EmailForm email)
        {
            if(email!=null)
            _emailSender.SendEmail(email.emails,email.body.subject,email.body.message);
            return Ok();
            //return Ok();
        }
    }
}
