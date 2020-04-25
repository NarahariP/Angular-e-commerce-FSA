import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/model/cart-item';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product = new Product();

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getProductDetails();
  }

  getProductDetails() {
    const productId = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(productId).subscribe((data) => {
      this.product = data;
    });
  }

  addTocart() {
    console.log('adddddddddddddddddddd');

    const cartItem = new CartItem(this.product);
    this.cartService.addToCart(cartItem);
  }
}
