using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using SiteMe.Models.Interfaces;

namespace SiteMe.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class AdminController : ControllerBase
    {
        private readonly IContact _IContact;
        public AdminController(IContact iContact)
        {
            _IContact = iContact;
        }

        [HttpGet]
        [Route("GetAllMessages")]
        public async Task<IActionResult> GetAllMessages()
        {
            return Ok(await _IContact.GetAllMessages());
        }

        [HttpPut]
        [Route("ChangeShowMessage/{contactID}")]
        public async Task<IActionResult> PutChangeShowMessage([FromRoute] int contactID)
        {
            if (ModelState.IsValid)
            {
                await _IContact.ChangeShowMessage(contactID);
                return Ok();
            }
            return BadRequest();
        }

        [HttpDelete]
        [Route("DeleteMessage/{contactId}")]
        public async Task<IActionResult> DeleteMessage([FromRoute] int contactId)
        {
            if (ModelState.IsValid)
            {
                await _IContact.DeleteMessage(contactId);
                return Ok();
            }
            return BadRequest();
        }

        [HttpGet]
        [Route("GetAdminPanelInfo")]
        public async Task<IActionResult> GetAdminPanelInfo()
        {
            return Ok(await _IContact.GetAdminPanelInfo());
        }
    }
}
