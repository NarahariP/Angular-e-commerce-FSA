import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/model/cart-item';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css'],
})
export class CartDetailsComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.listOfCartItems();
  }

  private listOfCartItems() {
    this.cartItems = this.cartService.cartItems;
    this.cartService.totalPrice.subscribe((data) => {
      this.totalPrice = data;
    });
    this.cartService.totalQuantity.subscribe((data) => {
      this.totalQuantity = data;
    });
    this.cartService.computeCartTotals();
    console.log(
      `Cart Items =${this.cartItems}, Total Price = ${this.totalPrice}, total Quanity =${this.totalQuantity}`
    );
  }

  incrementItem(theCartItem: CartItem) {
    this.cartService.addToCart(theCartItem);
  }

  decrementItem(theCartItem: CartItem) {
    this.cartService.decrementQuantity(theCartItem);
  }

  removeItem(theCartItem: CartItem) {
    this.cartService.removeItem(theCartItem);
  }
}
