import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  //variable declaration
  cartTotal!:number
  constructor(private appService: AppService) {
    //get the value of total items in cart
    this.appService.cartTotal.subscribe(val=>{
      this.cartTotal = val
    })
  }
}
