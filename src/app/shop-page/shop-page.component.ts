import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from '../../model/Product';
import { ProductsMockup } from '../../utils/ProductsMockup';

@Component({
  selector: 'shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ShopPageComponent implements OnInit {

  Products: Product[];

  constructor() { 
    let productsMockup = new ProductsMockup();
    this.Products = productsMockup.getProducts();
    console.log(this.Products);
  }

  ngOnInit() {
  }
}
