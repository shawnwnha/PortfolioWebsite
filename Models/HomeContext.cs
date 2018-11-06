using Microsoft.EntityFrameworkCore;

namespace portfolio.Models{
    public class HomeContext : DbContext
    {
        public HomeContext(DbContextOptions<HomeContext> options) : base(options) { }
        public DbSet<Post> posts {get;set;}
    }
}