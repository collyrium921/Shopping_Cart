import { Component, OnInit } from '@angular/core'
import { AppService } from '../app.service'
import { LIST_ITEMS } from '../listItems'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  isListFormat: boolean = false
  listItems = LIST_ITEMS
  item: any = []
  constructor(private appService: AppService) {}

  ngOnInit(): void {}

  addItemToCart(i: number, shoe: any) {
    this.item.push({
      name: shoe.name,
      price: shoe.price,
    })
    this.appService.addedItem.next(this.item[this.item.length - 1])
  }
}
