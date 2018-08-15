import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from '../../model/Product';
import { ProductsMockup } from '../../utils/ProductsMockup';
//import { MatCardModule } from '@angular/material/card'; // todo remove
import { HttpClient } from '@angular/common/http';
import { ProductEntity } from '../../model/ProductEntity';
import { baseUrl } from '../../utils/constants';

@Component({
  selector: 'shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ShopPageComponent implements OnInit {

  showSpinner: boolean;
  Products: Product[];
  products: ProductEntity[];

  constructor(private http: HttpClient) {
    const productsMockup = new ProductsMockup();
    this.Products = productsMockup.getProducts();

    this.fetchProducts();
  }

  ngOnInit() {
  }

  onClickAddToCart(product: Product) {
    this.sendProduct(product);
  }

  sendProduct(product: Product): void {
      
  }

  fetchProducts() {

    this.showSpinner = true;

    this.http.get(baseUrl + 'Products/GetAll').subscribe(data => {

      this.products = data as ProductEntity[];
      this.showSpinner = false;
    });
  }

  onClickAdd(product: ProductEntity) {

    this.showSpinner = true;
    let model = {
      ProductId: product.Id,
      UserId: 1
    };

    this.http.post(baseUrl + 'ShoppingCart/AddProduct', model).subscribe(data => {

      console.log(data);
      this.showSpinner = false;
    });
  }
}
