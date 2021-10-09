import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "notice-dialog",
  templateUrl: "noticeDialog.component.html",
  styleUrls: ["noticeDialog.component.scss"],
})
export class NoticeDialog implements OnInit {
  constructor(public dialogRef: MatDialogRef<NoticeDialog>) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
