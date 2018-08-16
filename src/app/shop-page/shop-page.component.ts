import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from '../../model/Product';
import { ProductsMockup } from '../../utils/ProductsMockup';
import { HttpClient } from '@angular/common/http';
import { ProductEntity } from '../../model/ProductEntity';
import { baseUrl } from '../../utils/constants';
import { MessageService } from '../services/message.service';
import { AlertMessageService } from '../shared/alert-message/alert-message.service';

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

  constructor(private http: HttpClient, private messageService: MessageService,
    private alertMessageService: AlertMessageService) {

    const productsMockup = new ProductsMockup();
    this.Products = productsMockup.getProducts();

    this.fetchProducts();
  }

  ngOnInit() {
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
    
    const model = {
      UserId: 1,
      ProductId: product.Id,
      ProductTitle: product.Title,
      ProductDescription: product.Description,
      Price: product.Price
    };

    this.http.post(baseUrl + 'ShoppingCart/AddProduct', model).subscribe(data => {

      this.messageService.sendCartRefresh(true);
      this.showSpinner = false;

      this.alertMessageService.success('Product was added to your shopping cart.');
      const element = document.querySelector('#preFooter');
      element.scrollIntoView();
    });
  }
}
