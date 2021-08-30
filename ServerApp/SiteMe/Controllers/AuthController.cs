using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using SiteMe.Models.Interfaces;
using SiteMe.Models.ViewModels;

namespace SiteMe.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuth _IAuth;
        private readonly IConfiguration _IConfiguration;
        public AuthController(IAuth iAuth, IConfiguration iConfiguration)
        {
            _IAuth = iAuth;
            _IConfiguration = iConfiguration;
        }

        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> PostLogin([FromBody] LoginViewModel login)
        {
            if (ModelState.IsValid)
            {
                if (await _IAuth.ExistUser(login))
                {
                    var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_IConfiguration["SymmetricSecurityKey"]));
                    var signingCredentials = new SigningCredentials(secretKey,SecurityAlgorithms.HmacSha256);
                    var tokenOption = new JwtSecurityToken(
                        issuer: _IConfiguration["AddressServer"],
                        expires: DateTime.Now.AddDays(7),
                        signingCredentials: signingCredentials
                    );
                    var token = new JwtSecurityTokenHandler().WriteToken(tokenOption);

                    return Ok(new {token = token});
                }
                return Unauthorized();
            }
            return BadRequest();
        }
    }
}
