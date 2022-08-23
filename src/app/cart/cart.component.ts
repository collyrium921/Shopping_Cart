import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  addedToCart =[{
    name:'Campus 1',
    price:2450
  },
  {
    name:'Campus 2',
    price:1450
  },{
    name:'Campus 3',
    price:2000
  }
]
 sum:number;
  constructor() { 
      this.sum = this.addedToCart.reduce((accumulator: number, object: { price: number; }) => {
      return accumulator + object.price;
    }, 0);
  }

  ngOnInit(): void {
  }
}