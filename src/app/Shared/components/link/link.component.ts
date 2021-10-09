import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sbc-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})

// TODO: make different sizes
export class LinkComponent implements OnInit {
  @Input() href!: string;
  @Input() text!: string;
  @Input() textHeight: number = 20;

  constructor() { }

  ngOnInit(): void {
  }

}
