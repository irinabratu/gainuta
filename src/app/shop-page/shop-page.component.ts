import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from '../../model/Product';
import { ProductsMockup } from '../../utils/ProductsMockup';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ShopPageComponent implements OnInit {

  Products: Product[];

  constructor() {
    const productsMockup = new ProductsMockup();
    this.Products = productsMockup.getProducts();
  }

  ngOnInit() {
  }

  onClickAddToCart(product: Product) {
    this.sendProduct(product);
  }

  sendProduct(product: Product): void {
      
  }
}
