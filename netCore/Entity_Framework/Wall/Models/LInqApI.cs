using System;
using System.Linq;
using System.Collections.Generic;
using login_registration.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;


namespace login_registration.Models
{
    public static class api
    {
        public static  User GetByEmail(this UserContext _context, string Email)
        {
            return _context.users.Include(x => x.messages)
            .ThenInclude(x => x.comments)
            .Where(x => x.Email == Email)
            .FirstOrDefault();
        }

        public static User GetUserByIdSession(this UserContext _context, int? UserId)
        {
            return _context.users.Include(x => x.messages)
            .ThenInclude(x => x.comments)
            .Where(x => x.UserId == UserId )
            .FirstOrDefault();
        }

        public static Message GetMessageById(this UserContext _context, int Id)
        {
            return _context.messages.Include(x => x.user)
            .ThenInclude(x => x.comments)
            .Where(x => x.MessageId == Id)
            .FirstOrDefault();
        }
    }
}