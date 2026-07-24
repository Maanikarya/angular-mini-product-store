import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: Product[] = [];
  cartItems$ = new BehaviorSubject<Product[]>(this.cartItems);

  constructor() { }

  addToCart(product: Product){
    this.cartItems = [...this.cartItems , product];
    this.cartItems$.next(this.cartItems);
  }
}
