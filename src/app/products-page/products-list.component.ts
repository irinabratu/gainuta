import { Component, OnInit } from '@angular/core';
import { ProductEntity } from '../../model/ProductEntity';
import { HttpClient } from '@angular/common/http';
import { ProductEntity } from '../../model/ProductEntity';
import { baseUrl } from '../../utils/constants';
import { MessageService } from '../services/message.service';
import { AlertMessageService } from '../shared/alert-message/alert-message.service';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent implements OnInit {

  showSpinner: boolean;
  products: ProductEntity[];
  displayedColumns: string[] = ['Actions', 'Title', 'Description', 'CreateDate', 'Price', 'IsNew', 'IsActive'];

  constructor(private http: HttpClient, private messageService: MessageService,
    private alertMessageService: AlertMessageService) {

    this.showSpinner = false;
  }

  ngOnInit() {

    this.fetchProducts();
  }

  fetchProducts() {

    this.showSpinner = true;

    this.http.get(baseUrl + 'Products/GetAll').subscribe(data => {

      this.products = data as ProductEntity[];
      this.showSpinner = false;
    });
  }

  onClickAdd() { }
}
