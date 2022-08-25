import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
interface item{
  name:string,
  price: number
}
@Injectable({
  providedIn: 'root'
})

export class AppService {
 

  constructor() {
   }

  public cartTotal: BehaviorSubject<number> = new BehaviorSubject<number>(3);

  public addedItem: BehaviorSubject<item>= new BehaviorSubject<item>({
    name: 'Campus 3',
    price: 2000,
  },)
}
