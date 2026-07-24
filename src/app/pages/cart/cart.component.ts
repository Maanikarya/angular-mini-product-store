import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cartItems: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {

    this.cartService.cartItems$.subscribe((items) => {
      this.cartItems = items;
    });

  }

}
