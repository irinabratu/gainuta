import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderEntity } from '../../model/OrderEntity';
import { baseUrl } from '../../utils/constants';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.css']
})

export class OrdersPageComponent implements OnInit {

  userId: number;
  orders: OrderEntity[];
  showSpinner: boolean;
  displayedColumns: string[] = ['Actions', 'Id', 'UserId', 'PlaceDate', 'Amount'];

  constructor(private http: HttpClient, public dialog: MatDialog) {
    this.userId = 1;
  }

  ngOnInit() {
    
    this.fetchOrders();
  }

  fetchOrders() {

    this.showSpinner = true;

    this.http.get(baseUrl + 'Orders/GetAllByUserId/' + this.userId)
      .subscribe(data => {

        this.orders = data as OrderEntity[];
        this.showSpinner = false;
      });
  }

  onClickViewOrder(id: number) {

    //let dialogRef = this.dialog.open(OrderDialogComponent, {
    //  disableClose: true,
    //  width: '800px',
    //  data: id
    //});

    //dialogRef.afterClosed().subscribe(result => {
    //  this.refreshMessagesGrid();
    //});
  }
}
