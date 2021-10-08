import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'notice-dialog',
  templateUrl: "noticeDialog.component.html",
  styleUrls: ["noticeDialog.component.scss"]
})
export class NoticeDialog implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<NoticeDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
