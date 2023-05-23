import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  productId: number = 10;
  productStock: string = 'Out of stock';

  constructor() {
    this.productStock = Math.random() > 0.5 ? 'In stock' : 'Out of stock';
  }

  getProductStock() {
    return this.productStock;
  }

  getColor() {
    return this.productStock === 'In stock' ? 'green' : 'red';
  }
}
