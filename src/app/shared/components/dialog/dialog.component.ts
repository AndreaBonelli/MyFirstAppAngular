import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
//import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  constructor(public dialogRef: MatDialogRef<DialogComponent>) {
  }
  confirm() {
    this.dialogRef.close(true);
  }

  refuse() {
    this.dialogRef.close(false);
  }
}
