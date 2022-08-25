import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartTotal!:number
  constructor(private appService: AppService) {
    this.appService.cartTotal.subscribe(val=>{
      this.cartTotal = val
    })
  }

  ngOnInit(): void {
  }
}
