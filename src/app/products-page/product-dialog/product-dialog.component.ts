import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProductEntity } from '../../../model/ProductEntity';
import { baseUrl } from '../../../utils/constants';
import { NgForm } from '@angular/forms';

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

  onClickSave(form: NgForm) {

    if (form.invalid) {
      return;
    }

    this.showSpinner = true;

    if (this.data === 0) {

      this.http.post(baseUrl + 'Products/Add', this.model)
        .subscribe(data => {

          this.showSpinner = false;
          this.dialogRef.close();
        });
    }
    else {

      this.http.put(baseUrl + 'Products/Update/' + this.model.Id, this.model)
        .subscribe(data => {

          this.showSpinner = false;
          this.dialogRef.close();
        });
    }    
  }

  onClickCancel() {

    this.dialogRef.close();
  }
}
