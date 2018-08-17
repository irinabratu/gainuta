import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ShoppingCartItemEntity } from '../../model/ShoppingCartItemEntity';
import { MessageService } from '../services/message.service';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../../utils/constants';
import { forEach } from '@angular/router/src/utils/collection';
import { AlertMessageService } from '../shared/alert-message/alert-message.service';

@Component({
  selector: 'checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class CheckoutPageComponent implements OnInit {
  
  userId: number;
  items: ShoppingCartItemEntity[];
  showSpinner: boolean;
  totalAmount: number;

  constructor(private messageService: MessageService, private http: HttpClient,
    private alertMessageService: AlertMessageService) {

    this.userId = 1;
    this.items = [];
    this.totalAmount = 0;
  }

  ngOnInit() {

    this.fetchShoppingCartItems();
  }

  fetchShoppingCartItems() {
    
    this.showSpinner = true;

    this.http.get(baseUrl + 'ShoppingCart/GetItems/' + this.userId).subscribe(data => {

      this.items = data as ShoppingCartItemEntity[];
      this.showSpinner = false;

      let amount = 0;

      this.items.forEach(function (item) {
        amount += item.Quantity * item.Price;
      });

      this.totalAmount = amount;
    });
  }

  removeItem(item: ShoppingCartItemEntity) {

    this.showSpinner = true;

    this.http.delete(baseUrl + 'ShoppingCart/RemoveItem/' + item.Id)
      .subscribe(data => {

        this.showSpinner = false;
        this.messageService.sendCartRefresh(true);
        this.fetchShoppingCartItems();
      });
  }

  placeOrder() {

    this.showSpinner = true;

    this.http.post(baseUrl + 'ShoppingCart/PlaceOrder', this.items)
      .subscribe(data => {

        this.showSpinner = false;
        this.alertMessageService.success('Order was placed successfully.');

        this.messageService.sendCartRefresh(true);
        this.fetchShoppingCartItems();
      }, error => {

        this.showSpinner = false;
        this.alertMessageService.error(error.message);
      });
  }
}
