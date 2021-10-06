import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'notice-dialog',
  template: `
    <div class="dialog">
      <div class="dialog__body">
        <span>Hi there!</span>
        <span>This website is still a work in progress!</span>
        <span>You can follow its progress here</span>
        <span>In the meantime, if you have any feedback or requests for a book to be added, you can leave a message here!</span>
      </div>
      <div class="dialog__footer">
        <sbc-button text="Proceed" type="primary"></sbc-button>
      </div>
    </div>
  `,
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
}
