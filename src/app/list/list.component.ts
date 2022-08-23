import { Component, OnInit } from '@angular/core';
import { LIST_ITEMS } from '../listItems';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  listItems = LIST_ITEMS
  constructor() { }

  ngOnInit(): void {
  }

}
