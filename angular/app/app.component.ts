import { Component } from '@angular/core';
import { Product } from './product';
import { ProductDetailsService } from './product-details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  product: Product;

  constructor(private productDetailsService: ProductDetailsService){}

  findProduct(productId: number): void {
    this.productDetailsService.findByProductId(productId).then(product => {this.product = product; console.log(product)});
  }
}
