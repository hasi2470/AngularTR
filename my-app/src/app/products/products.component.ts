import { Component, OnInit } from '@angular/core';
import {Product} from '../interfaces/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products: Product[]=[
    {id: 1, name: 'Minimalists Analog Watch', price: 109,color: 'Black', available: 'Available', image: '/assets/products/product-image-1.jpeg'},
    {id: 2, name: 'Hi Sense Ultra HD Smart TV', price: 3000,color: 'Black', available: 'Available', image: '/assets/products/product-image-2.jpeg'},
    {id: 3, name: 'APPLE iphone 12', price: 109,color: 'Black', available: ' Not Available', image: '/assets/products/product-image-3.jpeg'},
    {id: 4, name: 'LG Fully Loaded Automatic Waching Machine', price: 1075,color: 'White', available: 'Available', image: '/assets/products/product-image-4.jpeg'},
    {id: 5, name: 'LG Refrigirator with Door Cooling', price: 2345,color: 'Blue', available: 'Not Available', image: '/assets/products/product-image-5.jpeg'},
    {id: 6, name: 'DELL inspiron One 27 Ryzen 7', price: 2300, color: 'White', available: 'Available', image: '/assets/products/product-image-6.jpeg'},


  ]
}
