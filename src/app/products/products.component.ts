import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  allowNewProduct = false;

  constructor() {
    setTimeout(() => {
      this.allowNewProduct = true;
    }, 2000);
  }
}
