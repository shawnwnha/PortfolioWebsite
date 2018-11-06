using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.AspNetCore.Http; 
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using portfolio.Models;

namespace portfolio.Controllers
{
    [Route("api/posts")]
    public class DotnetController : Controller
    {
        private HomeContext _context;
        
        public DotnetController(HomeContext context){
            _context = context;
        }  
        // [HttpGet] // see all posts  
        // [Route("posts")]
        // public JsonResult showPosts()
        // {
        //     Console.WriteLine("!");
        //     return Json(_context.posts.ToList());
        // }
        [HttpPost] // users posts 
        public JsonResult submitPosts([FromBody] Post data)
        {
            if(ModelState.IsValid){
                _context.posts.Add(data); // error point internal server error 500 ; maybe connection problem.. to SQL?
                _context.SaveChanges();// error point 500;
                return Json(new {data="Submitted."});
            }
            else{
                return Json(new {message=ModelState.Values});
            }
        }        
    }
}
