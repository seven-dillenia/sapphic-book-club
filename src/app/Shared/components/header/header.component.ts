import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
      <div class="header">
        <div class="header__text">
          <span class="--large">Sapphic Book Club</span>
          <!-- <span class="--sub">Discover books featuring sapphic main characters</span> -->
        </div>
        <div class="header__logo">
          <div class="header__logo__colour --blue-bg"></div>
          <div class="header__logo__colour --pink-bg"></div>
          <div class="header__logo__colour --yellow-bg"></div>
          <div class="header__logo__colour --green-bg"></div>
          <div class="header__logo__colour --purple-bg"></div>
        </div>
      </div>
    `,
    styleUrls: ["header.component.scss"]
})
export class HeaderComponent {
  constructor() { }
}
