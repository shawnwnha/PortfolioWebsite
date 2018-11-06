import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { HttpService } from '../http.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import * as anime from 'animejs';

declare var $:any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: "translateX(0)"
      })),
      state('hide', style({
        opacity: 0,
        transform: "translateX(-100%)"
      })),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('1000ms ease-in')), 
    ]),
    trigger('statusAnimation', [
      state('show', style({
        opacity: 1,
        transform: "translateX(0)"
      })),
      state('hide', style({
        opacity: 0,
        transform: "translateX(100%)"
      })),
      transition('show => hide', animate('500ms ease-out')),
      transition('hide => show', animate('500ms ease-in')), 
    ]),
    trigger('portfAnimation', [
      state('show', style({
        opacity: 1,
        transform: "translateY(0)"
      })),
      state('hide', style({
        opacity: 0,
        transform: "translateY(100%)"
      })),
      transition('show => hide', animate('500ms ease-out')),
      transition('hide => show', animate('500ms ease-in')), 
    ]),
  ]  
})
export class ProfileComponent implements OnInit {
  constructor(
    private _httpService: HttpService,
    private el: ElementRef
  ){}

  state = 'hide';
  state1 = 'hide';
  state2 = 'hide';
  animation1: any;
  animation2: any;
  animation3: any;

  ngOnInit() {
    $('.ml11 .letters').each(function(){
      $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    });
    this.animation1 = anime.timeline({loop: false})
    .add({targets: '.ml11 .line',scaleY: [0,1],opacity: [0.5,1],easing: "easeOutExpo",duration: 700})
    .add({targets: '.ml11 .line',translateX: [0,$(".ml11 .letters").width()],easing: "easeOutExpo",duration: 700,delay: 100, opacity:0})
    .add({targets: '.ml11 .letter',opacity: [0,1],easing: "easeOutExpo",duration: 600,offset: '-=775',delay: function(el, i) {return 34 * (i+1)}}) 
    .add({targets: '.ml11',opacity: 1,duration: 1000,easing: "easeOutExpo",delay: 1000});

    $('.ml12 .letters2').each(function(){
      $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter1'>$&</span>"));
    });
    this.animation2 = anime.timeline({loop: false})
    .add({targets: '.ml12 .line2',scaleY: [0,1],opacity: [0.5,1],easing: "easeOutExpo",duration: 700})
    .add({targets: '.ml12 .line2',translateX: [0,$(".ml12 .letters2").width()],easing: "easeOutExpo",duration: 700,delay: 1000,opacity:0})
    .add({targets: '.ml12 .letter1',opacity: [0,1],easing: "easeOutExpo",duration: 600,offset: '-=775',delay: function(el, i) {return 34 * (i+1)}}) 
    .add({targets: '.ml12',opacity: 1,duration: 1000,easing: "easeOutExpo",delay: 1000});

    $('.ml13 .letters3').each(function(){
      $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter3' style='font-size:1em;'>$&</span>"));
    });
    this.animation3 = anime.timeline({loop: true})
    .add({targets: '.ml13 .line3',scaleY: [0,1],opacity: [0.5,1],easing: "easeOutExpo",duration: 700})
    .add({targets: '.ml13 .line3',translateX: [0,$(".ml13 .letters3").width()],easing: "easeOutExpo",duration: 700,delay: 1000, opacity:0})
    .add({targets: '.ml13 .letter3',opacity: [0,1],easing: "easeOutExpo",duration: 600,offset: '-=775',delay: function(el, i) {return 34 * (i+1)}}) 
    .add({targets: '.ml13',opacity: 1,duration: 1000,easing: "easeOutExpo",delay: 1000});

    setTimeout(function(){
      $('#homeButton').css('visibility','visible');
      $('#profileButton').css('visibility','visible');
      $('#contactButton').css('visibility','visible');
      $('#links').css('visibility','visible');
    },3000)    
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset
    if (scrollPosition >= 400) {
      this.state = 'show'
    } 
    else {
      this.state = 'hide'
    }
    if (scrollPosition >=1450){
      this.state1 = 'show'
    }
    else{
      this.state1 = 'hide'
    }
    if (scrollPosition >=2200){
      this.state2 = 'show'
    }
    else{
      this.state2 = 'hide'
    }
  }
}
