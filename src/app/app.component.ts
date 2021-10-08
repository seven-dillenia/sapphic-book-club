import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoticeDialog } from './modules/home/partial/notice-dialog/noticeDialog.component';
import { Helper } from './shared/utils/helper';
import { TypeUtil } from './shared/utils/type-utils';
import { LocalStorageModel } from './models/localStorageModel';

@Component({
  selector: 'app-root',
  template: `
    <div class="sapphic container">
      <div class="sapphic__row container__row">
        <app-header></app-header>
      </div>
      <!-- <div class="sapphic__row container__row">
        <app-filter></app-filter>
      </div> -->
      <main>
        <router-outlet></router-outlet>
      </main>
    </div>
    <footer>
      <sbc-footer></sbc-footer>
    </footer>
  `,
  styles: []
})

export class AppComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.openNoticeDialog();
  }

  openNoticeDialog(): void {
    const localStorageKey: keyof LocalStorageModel = "hasShownNotice1";
    const localStorageValue = localStorage.getItem(localStorageKey);
    const hasShownNotice1 = TypeUtil.stringToBoolean(localStorageValue || '');

    if (!hasShownNotice1) {
      this.dialog.open(NoticeDialog, {
        maxWidth: '500px',
      });

      localStorage.setItem(localStorageKey, 'true');
    }
  }
}
