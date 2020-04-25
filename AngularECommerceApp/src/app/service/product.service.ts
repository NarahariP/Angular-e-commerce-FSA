import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../model/product';
import { ProductCategory } from '../model/product-category';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/api';
  constructor(private http: HttpClient) {}

  getProductList(theCategoryId: number): Observable<Product[]> {
    const searchUrl = `${this.baseUrl}/products/search/findByCategoryId?id=${theCategoryId}`;
    return this.getProducts(searchUrl);
  }

  private getProducts(searchUrl: string): Observable<Product[]> {
    return this.http
      .get<GetProductResponse>(searchUrl)
      .pipe(map((response) => response._embedded.products));
  }

  getProductListPagination(
    thePage: number,
    thePageSize: number,
    theCategoryId: number
  ): Observable<GetProductPaginationResponse> {
    const searchUrl =
      `${this.baseUrl}/products/search/findByCategoryId?id=${theCategoryId}` +
      `&page=${thePage}&size=${thePageSize}`;
    return this.http.get<GetProductPaginationResponse>(searchUrl);
  }

  searchProducts(keyword: string): Observable<Product[]> {
    const searchUrl = `${this.baseUrl}/products/search/findByNameContaining?name=${keyword}`;
    return this.getProducts(searchUrl);
  }

  searchProductsPagination(
    thePage: number,
    thePageSize: number,
    keyword: string
  ): Observable<GetProductPaginationResponse> {
    const searchUrl =
      `${this.baseUrl}/products/search/findByNameContaining?name=${keyword}` +
      `&page=${thePage}&size=${thePageSize}`;
    return this.http.get<GetProductPaginationResponse>(searchUrl);
  }

  getProductCategotyList(): Observable<ProductCategory[]> {
    const searchUrl = `${this.baseUrl}/product-category`;
    return this.http
      .get<GetProductCategoryResponse>(searchUrl)
      .pipe(map((response) => response._embedded.productCategory));
  }

  getProduct(productId: number): Observable<Product> {
    const searchUrl = `${this.baseUrl}/products/${productId}`;
    return this.http.get<Product>(searchUrl);
  }
}

interface GetProductResponse {
  _embedded: {
    products: Product[];
  };
}

interface GetProductPaginationResponse {
  _embedded: {
    products: Product[];
  };
  page: {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
  };
}

interface GetProductCategoryResponse {
  _embedded: {
    productCategory: ProductCategory[];
  };
  page: {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
  };
}
