import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  //slogan: string= "";
  slogan: string= "One Stop Shop For Everthing";

  //imgSource: string ="assets/ecommerce.jpeg";
 

  getSlogan(): string{
    //return this.slogan;
    return "ECommerceapp";
  }


  
//  Trailsssss

  imgSource: string ="https://thumbs.dreamstime.com/b/pastel-colorful-shopping-bag-pink-background-177551556.jpg";
}
