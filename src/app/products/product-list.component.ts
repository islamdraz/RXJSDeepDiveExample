import { Component, OnInit, OnDestroy } from "@angular/core";

import { Subscription, Observable, EMPTY } from "rxjs";

import { Product } from "./product";
import { ProductService } from "./product.service";
import { catchError } from "rxjs/operators";

@Component({
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent {
  pageTitle = "Product List";
  errorMessage = "";
  categories;

  products$ = this.productService.productWithCategories$.pipe(
    catchError((err) => {
      this.errorMessage = err;
      return EMPTY;
    })
  );
  // products: Product[] = [];
  sub: Subscription;

  constructor(private productService: ProductService) {}

  // ngOnInit(): void {
  //   // this.sub = this.productService.getProducts()
  //   //   .subscribe(
  //   //     products => this.products = products,
  //   //     error => this.errorMessage = error
  //   //   );

  //   this.products$ = this.productService.getProducts();
  // }

  // ngOnDestroy(): void {
  //   this.sub.unsubscribe();
  // }

  onAdd(): void {
    console.log("Not yet implemented");
  }

  onSelected(categoryId: string): void {
    console.log("Not yet implemented");
  }
}
