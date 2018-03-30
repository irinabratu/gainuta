import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-confirm-dialog',
    templateUrl: './app-confirm-dialog.component.html',
    styleUrls: ['./app-confirm-dialog.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppConfirmDialogComponent implements OnInit {

    message: string;

    constructor(public dialogRef: MatDialogRef<AppConfirmDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
        
        this.message = data.Message;
    }

    ngOnInit() { }

    onClickOk() {

        this.dialogRef.close(true);
    }

    onClickCancel() {

        this.dialogRef.close(false);
    }
}
