import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  productId: number = 10;
  productStock: string = 'Out of stock';

  getProductStock() {
    return this.productStock;
  }
}
