import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import * as anime from 'animejs';
declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  animation1: any;
  animation2: any;

  ngOnInit() {
    this.animation1 = anime.timeline({loop: false})
    .add({
        targets: '.ml15 .word',
        scale: [14,1],
        opacity: [0,1],
        easing: "easeOutCirc",
        duration: 800,
        delay: function(el, i) {
        return 800 * i;
        }
    }).add({
        targets: '.ml15',
        opacity: 1,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });

    $('.ml12').each(function(){
      $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    }); // 
    this.animation2 = anime.timeline({loop: true})
      .add({
        targets: '.ml12 .letter',
        translateX: [40,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: function(el, i) {
          return 500 + 30 * i;
        }
      }).add({
        targets: '.ml12 .letter',
        translateX: [0,-30],
        opacity: [1,0],
        easing: "easeInExpo",
        duration: 1100,
        delay: function(el, i) {
          return 100 + 30 * i;
        }
      });
      setTimeout(function(){
        $('#homeButton').css('visibility','visible');
        $('#profileButton').css('visibility','visible');
        $('#contactButton').css('visibility','visible');
        $('#links').css('visibility','visible');
      },3000)
  }
}
