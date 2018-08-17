import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { OrderDialogEntity } from '../../../model/OrderDialogEntity';
import { baseUrl } from '../../../utils/constants';

@Component({
  selector: 'order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.css']
})

export class OrderDialogComponent implements OnInit {

  showSpinner: boolean;
  model: OrderDialogEntity = new OrderDialogEntity();

  constructor(public dialogRef: MatDialogRef<OrderDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number, private http: HttpClient) { }

  ngOnInit() {

    this.showSpinner = true;

    this.http.get(baseUrl + 'Orders/Get/' + this.data)
      .subscribe(data => {
        if (data === null) {
          this.dialogRef.close();
          this.showSpinner = false;
        }

        this.model = data as OrderDialogEntity;
        this.showSpinner = false;
      });
  }

  onClickClose(): void {

    this.dialogRef.close();
  }
}
