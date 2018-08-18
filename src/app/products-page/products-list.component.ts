import { Component, OnInit } from '@angular/core';
import { ProductEntity } from '../../model/ProductEntity';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../../utils/constants';
import { MessageService } from '../services/message.service';
import { AlertMessageService } from '../shared/alert-message/alert-message.service';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

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
    private alertMessageService: AlertMessageService, private dialog: MatDialog) {

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

  onClickEdit(id: number) {
    
    let dialogRef = this.dialog.open(ProductDialogComponent, {
      disableClose: true,
      width: '800px',
      height: '600px',
      data: id
    });

    dialogRef.afterClosed().subscribe(result => {
      this.fetchProducts();
    });
  }

  onClickAdd() {
    
    let dialogRef = this.dialog.open(ProductDialogComponent, {
      disableClose: true,
      width: '800px',
      height: '600px',
      data: 0
    });

    dialogRef.afterClosed().subscribe(result => {
      this.fetchProducts();
    });
  }
}
