using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace portfolio.Models{    
    public class Post
    {
        [Key]
        public int postId {get;set;}
        [Required(ErrorMessage = "Name cannot be empty.")]
        [MinLength(2,ErrorMessage="Name must be more than 2 characters.")]
        [RegularExpression("^[a-zA-Z ]+$", ErrorMessage = "Name must be characters only.")]
        public string name { get;set; }
        [Required(ErrorMessage = "Email Address cannot be empty.")]
        [EmailAddress]
        public string email { get;set; }
        public string message { get;set; }
        public DateTime created_at {get;set;} 
    }
}