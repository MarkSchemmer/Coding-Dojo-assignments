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
                return _.users
                .Include(x => x.PostsCreated)
                .ThenInclude(x => x.Likes)
                .FirstOrDefault(x => x.Email == Email);
            }

            public static User GetUserById(this UserContext _, int Id)
            {
                return _.users
                .Include(x => x.PostsCreated)
                .ThenInclude(x => x.Likes)
                .FirstOrDefault(x => x.UserId == Id);
            }

            public static Post GetPostById(this UserContext _, int Id)
            {
                return _.posts
                .Include(x => x.creator)
                .Include(x => x.Likes).ThenInclude(x => x.user)
                .FirstOrDefault(x => x.PostId == Id);
            }


            public static void CreatePost(this UserContext _, string desc, User user)
            {
                var post = new Post
                {
                    Description = desc,
                    creator = user,
                };

                _.posts.Add(post);
                user.PostsCreated.Add(post);
                _.SaveChanges();
            }


            public static void LikePost(this UserContext _, User user, Post post)
            {
                var hasLiked = post.Likes.Any(x => x.user.UserId == user.UserId);
                if(!hasLiked)
                {
                    var like = new Like
                    {
                        post = post,
                        user = user,
                    };
                    post.Likes.Add(like);
                    _.SaveChanges();
                }
         
            }
    }
}