using Microsoft.AspNetCore.Mvc;
using EmailSender.Models.Context;

namespace EmailSender.Controllers
{
    public class MessageController : Controller
    {
        private readonly AppDbContext _context;
        public MessageController(AppDbContext context)
        {
            _context=context;
        }
        [HttpPost]
        public IActionResult Add([FromBody]EmailSender.Models.MailBody newMail)
        {
            var x = _context.messages.ToList().FindIndex(mail => newMail.subject == mail.subject && newMail.message == mail.message);
            if(x<0 && newMail.subject!=null && newMail.message!=null )
            {
                newMail.id = null;
                _context.messages.Add(newMail);
                _context.SaveChanges();
                return Ok(true);
            }
            else
                return Ok(false);
            return NotFound();
        }

        public IActionResult Get(int id)
        {
            try
            {

            var indexMessage = _context.messages.ToList().FindIndex(mail => mail.id == id);
            if (indexMessage >= 0)
            {
                return Ok(_context.messages.ToList()[indexMessage]);
            }
                return Ok(new List<EmailSender.Models.MailBody>());
            }
            catch (Exception ex)
            {
            return NotFound();
            }
        }

        public IActionResult GetAll()
        {
                return Ok(_context.messages.ToList());
        }

    }
}
