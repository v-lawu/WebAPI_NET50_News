using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using WebAPI_NET50_News.Data;

namespace WebAPI_NET50_News.Models
{
    public class News
    {
        [Key]
        public int ID { get; set; }
        public string Title { get; set; }
        public string Context { get; set; }
        public DateTime NewsDate { get; set; }
        public DbSet<Category> Categories { get; set; } 
        public DbSet<User> Users { get; set; }
    }
}
