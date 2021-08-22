import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  template: `
        <div class="filter">
      <div class="filter__header">Genres</div>
      <div class="filter__genre">
        <div class="--light-blue-bg" (click)="onTagClick($event.target);">
          <div class="filter__genre__tag">
            <span style="visibility: hidden;">Fantasy</span>
            <div class="filter__genre__tag__text">Fantasy</div>
          </div>
        </div>
        <div class="--jaded-yellow-bg" (click)="onTagClick($event.target);">
          <div class="filter__genre__tag">
            <span style="visibility: hidden;">Science Fiction</span>
            <div class="filter__genre__tag__text">Science Fiction</div>
          </div>
        </div>
        <div class="--light-green-bg" (click)="onTagClick($event.target);">
          <div class="filter__genre__tag">
            <span style="visibility: hidden;">Romance</span>
            <div class="filter__genre__tag__text">Romance</div>
          </div>
        </div>
        <div class="--light-orange-bg" (click)="onTagClick($event.target);">
          <div class="filter__genre__tag">
            <span style="visibility: hidden;">Historical</span>
            <div class="filter__genre__tag__text">Historical</div>
          </div>
        </div>
        <div class="--light-yellow-bg" (click)="onTagClick($event.target);">
          <div class="filter__genre__tag">
            <span style="visibility: hidden;">Contemporary</span>
            <div class="filter__genre__tag__text">Contemporary</div>
          </div>
        </div>
        <div class="--light-turqouise-bg" (click)="onTagClick($event.target);">
          <div class="filter__genre__tag">
            <span style="visibility: hidden;">Horror</span>
            <div class="filter__genre__tag__text">Horror</div>
          </div>
        </div>
        <div class="--light-purple-bg" (click)="onTagClick($event.target);">
          <div class="filter__genre__tag">
            <span style="visibility: hidden;">Crime</span>
            <div class="filter__genre__tag__text">Crime</div>
          </div>
        </div>
        <div class="--light-pink-bg" (click)="onTagClick($event.target);">
          <div class="filter__genre__tag">
            <span style="visibility: hidden;">Thriller</span>
            <div class="filter__genre__tag__text">Thriller</div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onTagClick(element: HTMLElement) {
    element.classList.toggle('--active');
  }
}
