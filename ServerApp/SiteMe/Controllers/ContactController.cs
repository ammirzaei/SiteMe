using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dr_Hesabi.Classes.Class;
using Microsoft.AspNetCore.Authorization;
using SiteMe.Models.Classes;
using SiteMe.Models.Interfaces;
using SiteMe.Models.ViewModels;

namespace SiteMe.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ContactController : ControllerBase
    {
        private readonly IContact _IContact;
        private readonly ISetting _ISetting;

        public ContactController(IContact iContact, ISetting iSetting)
        {
            _IContact = iContact;
            _ISetting = iSetting;
        }

        [HttpPost]
        [Route("CreateMessage")]
        public async Task<IActionResult> PostMessage([FromBody] ContactViewModel contact)
        {
            if (ModelState.IsValid)
            {
                if (!await _IContact.ExistIP(contact.IP))
                {
                    await _IContact.AddContactMessage(contact);

                    /// Send Email
                    //string body = _IViewRenderService.RenderToStringAsync("", "");
                    SendEmail.Send("ammirzaei.dev@gmail.com", "پیام جدید", "", await _ISetting.GetSetting());
                    return Ok();
                }
                return NoContent();
            }
            return BadRequest();
        }

        [HttpGet]
        [Route("GetAllMessages")]
        public async Task<IActionResult> GetAllMessages()
        {
            return Ok(await _IContact.GetAllMessages());
        }
    }
}
