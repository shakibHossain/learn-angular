import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  @ViewChild('myButton')
  myButton!: ElementRef;

  allowNewProduct = false;
  productCreationStatus = 'No product was created';
  productName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewProduct = true;
    }, 2000);
  }

  onCreateProduct() {
    console.log('myButton', this.myButton.nativeElement);
    this.productCreationStatus = 'Product was created';
  }

  onUpdateProductName(event: any) {
    this.productName = event.target.value;
  }
}
