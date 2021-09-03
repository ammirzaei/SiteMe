using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Net.Mail;
using System.Text;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Mvc.ViewEngines;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using SiteMe.Models.Entities;

namespace SiteMe.Models.Classes
{
    public static class SendEmail
    {
        public static void Send(string To, string Subject, string Body, Setting setting)
        {
            try
            {
                MailMessage message = new MailMessage();
                SmtpClient client = new SmtpClient();
                message.From = new MailAddress(setting.Email, "سایت شخصی امیرمحمد میرزائی");
                message.To.Add(To);
                message.Body = Body;
                message.Subject = Subject;
                message.IsBodyHtml = true;

                client.Host = "mail.ammirzaei.ir";
                client.Port = 25;
                client.EnableSsl = false;
                client.Credentials = new NetworkCredential(setting.Email, setting.EmailPassword);

                client.Send(message);
            }
            catch
            {
                
            }
        }
    }
}
