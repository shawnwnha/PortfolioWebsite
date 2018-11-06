import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { trigger, transition, group, query, style, animate } from '@angular/animations';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimation',[
      transition('1 => 2', [
        style({ height:'!'}),
        query(':enter', style({transform:'translateX(100%)'})),
        query(':enter, :leave', style({position:'absolute', top:0, left:0, right:0})),
        group([
          query(':leave', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({transform: 'translateX(-100%)'}))]),
          query(':enter', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({transform: 'translateX(0)'}))]),
        ])
      ]),
      transition('2 => 1', [
        style({ height:'!'}),
        query(':enter', style({transform:'translateX(-100%)'})),
        query(':enter, :leave', style({position:'absolute', top:0, left:0, right:0})),
        group([
          query(':leave', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({transform: 'translateX(100%)'}))]),
          query(':enter', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({transform: 'translateX(0)'}))]),
        ])
      ])
    ])
  ]
})

export class AppComponent {
  title = 'app';
  constructor(private _httpService: HttpService){}
  ngOnInit(){
  } 
  getDepth(outlet){
    return outlet.activatedRouteData['depth'];
  }
}
