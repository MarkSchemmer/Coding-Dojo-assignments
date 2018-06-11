using Microsoft.EntityFrameworkCore;

namespace RESTauranter
{
    public class ReviewContext : DbContext
    {
        public DbSet<Review> reviews { get; set; }

        public ReviewContext(DbContextOptions<ReviewContext> options) : base(options) { }
    }
}