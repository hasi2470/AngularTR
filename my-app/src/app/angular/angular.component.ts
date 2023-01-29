import { Component, OnInit } from '@angular/core';

import { EntrollService } from '../Services/entrollservice.component';


@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],
  providers:[EntrollService]
})
export class AngularComponent implements OnInit {

  title: string='Angular';

  constructor(public enrollSvc: EntrollService) { }

  ngOnInit(): void {
  }

  onClickEntroll(){
    // alert(`You have entrolled into ${this.title}`);



   //create an object of the Service class
    //let eSvc= new EntrollService();
    // eSvc.entroll(this.title);

    this.enrollSvc.entroll(this.title);
  }


}
