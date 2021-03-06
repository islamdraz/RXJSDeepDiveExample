import { Component, OnInit, OnDestroy } from "@angular/core";

import { Subscription, Observable, EMPTY } from "rxjs";

import { Product } from "../product";
import { ProductService } from "../product.service";
import { catchError, map } from "rxjs/operators";

@Component({
  selector: "pm-product-list",
  templateUrl: "./product-list-alt.component.html",
})
export class ProductListAltComponent {
  pageTitle = "Products";
  errorMessage = "";
  selectedProductId;

  // products: Product[] = [];
  products$ = this.productService.products$.pipe(
    catchError((err) => {
      this.errorMessage = err;
      return EMPTY;
    })
  );
  //sub: Subscription;

  constructor(private productService: ProductService) {}

  // ngOnInit(): void {
  //   this.sub = this.productService.getProducts().subscribe(
  //     products => this.products = products,
  //     error => this.errorMessage = error
  //   );
  // }

  // ngOnDestroy(): void {
  //   this.sub.unsubscribe();
  // }

  onSelected(productId: number): void {
    console.log("Not yet implemented");
  }
}
