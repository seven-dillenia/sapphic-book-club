import { Component } from '@angular/core';

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
      <div class="sapphic__row container__row"></div>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'sapphics';
}
