using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

/*
        dotnet ef database update
        dotnet ef migrations add -name 
        commands for migrating and updating database!
 */

namespace login_registration.Models
{
    public static class queryAPI
    {
            public static void AddUser(this UserContext _, User user)
            {
                _.users.Add(user);
                _.SaveChanges();
            }

            public static User GetUserByEmail(this UserContext _, string Email)
            {
                return _.users.FirstOrDefault(x => x.Email == Email);
            }

            public static User GetUserById(this UserContext _, int UserId)
            {
                return _.users.FirstOrDefault(x => x.UserId == UserId);
            }

            public static void AddAct(this UserContext _, _Activity activity, User user)
            {
                _.activitys.Add(activity);
                user.activitysCreated.Add(activity);
                activity.UserId = user.UserId;
                activity.creator = user;
                _.SaveChanges();
            }

            public static _Activity GetActById(this UserContext _, int Id)
            {
                return _.activitys.Include(x => x.creator).Include(x => x.participants)
                .FirstOrDefault(x => x._ActivityId == Id);
            }


            public static void JoinActivity(this UserContext _, User user, _Activity act)
            {
                var goingToEvent = user.activitysParticipatingIn.Any(x => x.UserId == user.UserId);
                if(!goingToEvent)
                {
                    var participent = new Particpant 
                    {
                        UserId = user.UserId,
                        user = user,
                        ActivityAttending = act,
                        _ActivityId = act._ActivityId
                    };
                    _.participants.Add(participent);
                    act.participants.Add(participent);
                    user.activitysParticipatingIn.Add(participent);
                    _.SaveChanges();
                }
            }

            public static void LeaveActivity(this UserContext _, User user, _Activity act)
            {
                var goingToEvent = user.activitysParticipatingIn.Any(x => x.UserId == user.UserId);
                if(goingToEvent)
                {
                    var participent = _.participants
                    .Include(x => x.ActivityAttending)
                    .FirstOrDefault(x => x._ActivityId == act._ActivityId);
                    _.participants.Remove(participent);
                    act.participants.Remove(participent);
                    user.activitysParticipatingIn.Remove(participent);
                    _.SaveChanges();
                }
            }

            public static void DeleteActivity(this UserContext _, User user, _Activity act)
            {
                var CanDeleteEvent = user.CanDelete(act);
                if(CanDeleteEvent)
                {
                    var participent = _.participants
                    .Include(x => x.ActivityAttending)
                    .FirstOrDefault(x => x._ActivityId == act._ActivityId);
                    _.participants.Remove(participent);
                    act.participants.Remove(participent);
                    user.activitysCreated.Remove(act);
                    user.activitysParticipatingIn.Remove(participent);
                    _.activitys.Remove(act);
                    _.SaveChanges();
                }
            }
    }
}