import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css'],
})
export class SearchProductComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  doSearch(keyword: string) {
    this.router.navigateByUrl(`/search/${keyword}`);
  }
}
