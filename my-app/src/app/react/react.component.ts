import { Component, OnInit } from '@angular/core';

import { EntrollService } from '../Services/entrollservice.component';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.css'],

  providers:[EntrollService]
})
export class ReactComponent implements OnInit {

title: string='React';

  constructor(public enrollSvc : EntrollService) { }

  ngOnInit(): void {
  }

  onClickEntroll(){
    // alert(`You have entrolled into ${this.title}`);


    //create
    // let eSvc= new EntrollService();
    // eSvc.entroll(this.title);

    this.enrollSvc.entroll(this.title);
  }



}
