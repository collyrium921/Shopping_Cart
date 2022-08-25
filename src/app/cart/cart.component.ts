import { Component, OnInit } from '@angular/core'
import { AppService } from '../app.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  addedToCart = [
    {
      name: 'Campus 1',
      price: 2450,
    },
    {
      name: 'Campus 2',
      price: 1450,
    },
  ]

  sum!: number
  constructor(private appService: AppService) {
    this.getTotalPrice();
  }

  ngOnInit(): void {
    this.appService.addedItem.subscribe( value => {
      this.addedToCart.push(value)
      this.getTotalPrice();
      this.appService.cartTotal.next(this.addedToCart.length);
    } );
  }

  getTotalPrice(){
    this.sum = this.addedToCart.reduce(
      (temp: number, object: { price: number }) => {
        return temp + object.price
      },
      0,
    )
  }
   removeElement(i:number){
    this.addedToCart.splice(i,1)
    this.appService.cartTotal.next(this.addedToCart.length);
    this.getTotalPrice();
  }
}
