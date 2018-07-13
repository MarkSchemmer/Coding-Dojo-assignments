using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Http;



namespace login_registration.Models
{
    public static class api
    {
        public static void AddUser(this UserContext _, User user)
        {
            _.users.Add(user);
            _.SaveChanges();
        }

        public static User GetUserById(this UserContext _, int UserId)
        {
            return _.users.FirstOrDefault(x => x.UserId == UserId);
        }

        public static User GetUserByEmail(this UserContext _, string Email)
        {
            return _.users.FirstOrDefault(x => x.Email == Email);
        }
    }
}