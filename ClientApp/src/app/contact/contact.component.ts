import { Component, OnInit, HostListener } from '@angular/core';
import { HttpService } from '../http.service'; 
import { trigger, state, style, animate, transition } from '@angular/animations';
import * as anime from 'animejs';
import { Router } from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations:[
    trigger('successAnimation', [
      state('1', style({
        opacity: 1,
        transform: "translateY(0)",
        visibility: "visible"
      })),
      state('0', style({
        opacity: 0,
        transform: "translateY(-50%)",
        visibility: "hidden"
      })),
      transition('0 => 1', animate('1000ms ease-in')),
      transition('1 => 0', animate('1000ms ease-out')),
    ]),
  ]
})

export class ContactComponent implements OnInit {
  constructor(
    private _httpService: HttpService,
    private _router:Router, 
  ) { }

  submit_message = {name:"", email:"",message:"",created_at:""}
  message = ""
  stateS = '0'

  ngOnInit() {
    setTimeout(function(){
      $('#homeButton').css('visibility','visible');
      $('#profileButton').css('visibility','visible');
      $('#contactButton').css('visibility','visible');
      $('#links').css('visibility','visible');
    },3000)

    $('#success').click(function(){
      this.stateS = '0'
    })
  }
  onSubmit(){
    if(!this.submit_message['name'] || !this.submit_message['email']){
      this.message = "Name & Email Required."
    }
    else{
      var x = new Date().toISOString().slice(0, 19).replace('T', ' ');
      this.submit_message.created_at = x
      let temp = this._httpService.post(this.submit_message);
      temp.subscribe(data => {
        if(data['message']){
          this.message = data['message'][0]['errors'][0]['errorMessage']
        }
        else{
          this.submit_message= {name:"", email:"",message:"",created_at:""}; //initialize after submittion
          this.message = data['data']
          this.stateS = '1'
          $('#wrapper').css('visibility','hidden')
        }
      })
    }
  }
  // showall(){
  //   let temp = this._httpService.show();
  //   temp.subscribe(data=>{
  //   })
  // }
  @HostListener('click', ['$event'])
  checkClick(event: MouseEvent) {
    this.stateS = '0'
    $('#wrapper').css('visibility','visible')
  }
}
