import { Component } from '@angular/core'
import { AppService } from '../app.service'
import { LIST_ITEMS } from '../listItems'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  //variable delaration
  isListFormat: boolean = false
  listItems = LIST_ITEMS
  item: any = []
  constructor(private appService: AppService) {}

/**
 * @param shoe object that is clicked
 * @function addItemToCart to add the clicked item to cart
 */
  addItemToCart(shoe: any) {
    this.item.push({
      name: shoe.name,
      price: shoe.price,
    })
    this.appService.addedItem.next(this.item[this.item.length - 1])
  }
}
