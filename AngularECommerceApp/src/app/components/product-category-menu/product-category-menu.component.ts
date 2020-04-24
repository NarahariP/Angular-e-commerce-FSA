import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/model/product-category';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-category-menu',
  templateUrl: './product-category-menu.component.html',
  styleUrls: ['./product-category-menu.component.css'],
})
export class ProductCategoryMenuComponent implements OnInit {
  productCategory: ProductCategory[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.listOfProductCategory();
  }

  listOfProductCategory() {
    this.productService.getProductCategotyList().subscribe((data) => {
      this.productCategory = data;
    });
  }
}
