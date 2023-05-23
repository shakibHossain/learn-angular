import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  @ViewChild('addProductButton')
  myButton!: ElementRef;

  allowNewProduct = false;
  productCreationStatus = 'No product was created';
  productCreated = false;
  productName = 'test';

  constructor() {
    setTimeout(() => {
      this.allowNewProduct = true;
    }, 2000);
  }

  onCreateProduct() {
    // console.log('myButton', this.myButton.nativeElement);
    this.productCreated = true;
    this.productCreationStatus =
      'Product was created. Name is ' + this.productName;
  }

  onUpdateProductName(event: any) {
    this.productName = event.target.value;
  }
}
