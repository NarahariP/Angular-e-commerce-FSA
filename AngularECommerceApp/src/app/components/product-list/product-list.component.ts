import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/model/product';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/model/cart-item';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[];
  currentCategoryId: number = 1;
  searchMode: boolean = false;
  previousCategoryId: number = 1;
  previousKeyword: string;

  thePageNumber: number = 1;
  thePageSize: number = 10;
  theTotalElements: number = 0;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }

  listProducts() {
    this.searchMode = this.route.snapshot.paramMap.has('keyword');
    if (this.searchMode) {
      this.handleSearchListProducts();
    } else {
      this.handleListProducts();
    }
  }

  handleListProducts() {
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');
    if (hasCategoryId) {
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id');
    }
    if (this.previousCategoryId != this.currentCategoryId) {
      this.thePageNumber = 1;
    }
    this.previousCategoryId = this.currentCategoryId;
    this.productService
      .getProductListPagination(
        this.thePageNumber - 1,
        this.thePageSize,
        this.currentCategoryId
      )
      .subscribe(this.processResult());

    /*this.productService
      .getProductList(this.currentCategoryId)
      .subscribe((response) => {
        this.products = response;
      });*/
  }

  updatePageSize(pageSize: number) {
    this.thePageSize = pageSize;
    this.thePageNumber = 1;
    this.listProducts();
  }

  private processResult() {
    return (data) => {
      this.products = data._embedded.products;
      this.thePageNumber = data.page.number + 1;
      this.thePageSize = data.page.size;
      this.theTotalElements = data.page.totalElements;
    };
  }

  handleSearchListProducts() {
    const keyword = this.route.snapshot.paramMap.get('keyword');
    if (this.previousKeyword != keyword) {
      this.thePageNumber = 1;
    }
    this.previousKeyword = keyword;
    this.productService
      .searchProductsPagination(
        this.thePageNumber - 1,
        this.thePageSize,
        keyword
      )
      .subscribe(this.processResult());
    /*this.productService
      .searchProducts(keyword)
      .subscribe((response) => {
      this.products = response;
    });*/
  }

  addTocart(theProduct: Product) {
    const cartItem = new CartItem(theProduct);
    this.cartService.addToCart(cartItem);
  }
}
