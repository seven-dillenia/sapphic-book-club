import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sbc-skeleton',
  templateUrl: "skeleton.component.html",
  styleUrls: ["skeleton.component.scss"]
})
export class SkeletonComponent implements OnInit {
  @Input() skeletonColour: string;
  
  constructor() { }

  ngOnInit(): void {
  }
}
