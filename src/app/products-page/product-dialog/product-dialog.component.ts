import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProductEntity } from '../../../model/ProductEntity';
import { baseUrl } from '../../../utils/constants';

@Component({
  selector: 'product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.css']
})

export class ProductDialogComponent implements OnInit {

  showSpinner: boolean;
  model: ProductEntity = new ProductEntity();

  constructor(public dialogRef: MatDialogRef<ProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number, private http: HttpClient) {
    
    this.showSpinner = false;
  }

  ngOnInit() {

    if (this.data === 0)
      return;
    
    this.showSpinner = true;

    this.http.get(baseUrl + 'Products/Get/' + this.data)
      .subscribe(data => {

        this.model = data as ProductEntity;
        this.showSpinner = false;
      });
  }

  onClickCance() {

    this.dialogRef.close();
  }

  onClickSave() {

    this.dialogRef.close();
  }
}
