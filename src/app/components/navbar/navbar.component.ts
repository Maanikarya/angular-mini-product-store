import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule , RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public cartService:CartService){}

  cartCount = 0; 

  ngOnInit(): void {

    this.cartService.cartItems$.subscribe((items) => {
      this.cartCount = items.length;
    });

  }
}
