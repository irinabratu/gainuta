import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/Product';
import { ProductsMockup } from '../../utils/ProductsMockup';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent implements OnInit {

  Products: Product[];

  constructor() {
    let productsMockup = new ProductsMockup();
    this.Products = productsMockup.getProducts();
    console.log(this.Products);
  }

  ngOnInit() {
  }
}
