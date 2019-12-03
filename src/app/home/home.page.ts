import { Component, animate, keyframes, style, state, trigger, transition } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [
    trigger('fadeIn',[
      transition('void => *',[
        animate('600ms ease-in', keyframes([
          style({opacity: 0, transform: 'translate(-70px)', offset: 0}),
          style({opacity: 1, transform: 'translate(25px)', offset: .75}),
          style({opacity: 1, transform: 'translate(0px)', offset: 1})
        ]))
      ])
    ]),

    trigger('fadeUp',[
      transition('void => *',[
        animate('900ms ease-in', keyframes([
          style({opacity: 0, transform: 'translate(70px)', offset: 0}),
          style({opacity: 1, transform: 'translate(0)', offset: 1}),
        ]))
      ])
    ]),    
  ]
})
export class HomePage {

  constructor() {}

}
