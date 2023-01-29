import { Component, OnInit } from '@angular/core';

// @Component({

//   selector: 'app-notification',
  
//   //template: `<div class="notification-div" [hidden]="displayNotification"> ??
//   template: `<div class="notification-div" [ngClass]="{fadeOut: displayNotification}"> 
//              This website uses cookies to provide better experience
//              <div class="close"><button class="btn" (click)="closeNotification()">X</button></div>
//               </div>`,

//   styles: [`.notification-div{margin: 10px 0px; padding: 10px 20px; text-align:center; background-color: #FAD7A0; font-size: 14px;}`,
// `.close{float: right; margin-top: -5px}`,
// `.fadeOut{visibility: hidden; opacity: 0 ; transition: visibility 0s 2s, opacity 2s linear;}`]

// })



@Component({

  selector: 'app-notification',
  
  //template: `<div class="notification-div" [hidden]="displayNotification"> ??
  template: `<div class="notification-div" [ngClass]="{fadeOut: displayNotification}"> 
             <i>This website uses cookies to provide better experience</i>
             <div class="close"><button class="btn" (click)="closeNotification()"> <b>X</b> </button></div>
            </div>`,

  styles: [
  `.notification-div{margin: 5px 10px; padding: 10px 45px; text-align:center; background-color: rgb(233, 232, 141);; font-size: 15px;  border: 1px solid #44133c;}`,
  `.close{float: right; margin-top: -6px;}`,
  `.fadeOut{visibility: hidden; opacity: 0 ; transition: visibility 0s 2s, opacity 2s linear;}`,
  `.btn{background: lightblue; margin: 1px 1px; padding: 3px 10px; margin-right: -40px; }`

       ]


})




export class NotificationComponent implements OnInit 
{

  constructor() { }

  ngOnInit(): void {
  }


  displayNotification=false;
  closeNotification()
  { 
  //If you write "eventData:any", then pass a number in "closeNotification(8)"
    this.displayNotification=true;
  }

}
