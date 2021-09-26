import { Component } from '@angular/core';
import { Helper } from './Shared/Helper';

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

      <!-- <footer class="sapphic__row container__row" style="justify-content: center;">
      </footer> -->
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'sapphics';

  constructor() {

  }

  async getMoreBooks() {
    console.log("delayying......")
    await Helper.delay(2000);
    console.log("done")
  }
}
