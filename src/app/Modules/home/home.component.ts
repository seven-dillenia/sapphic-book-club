import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: "home.component.html",
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onTagClick(element: HTMLElement) {
    element.classList.toggle('--active');
  }
}
