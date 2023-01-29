import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html', 
  styleUrls: ['./search.component.css'] 
})

export class SearchComponent implements OnInit 
{

  constructor() { }

  ngOnInit(): void {
  }


  searchValue: string=''; 
 //searchValue: string='Samsung'; 



  changeSearchValue(eventData: any)
  {
    console.log((<HTMLInputElement>eventData.target).value);
    this.searchValue=(<HTMLInputElement>eventData.target).value;
  }

}
