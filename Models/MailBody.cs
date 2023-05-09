using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EmailSender.Models
{
    [Table("Messages",Schema = "Email")]
    public class MailBody
    {
        [Key,DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int? id { get; set; }

        [Column(TypeName = "nvarchar(250)")]
        public string subject { get; set; }
        [Column(TypeName = "nvarchar(MAX)")]
        public string message { get; set; }
    }
}
