import { Component, Input, OnInit } from '@angular/core';
import { PublicBookModel } from 'src/app/Shared/Services/api.v1.service';

@Component({
  selector: 'book-card',
  templateUrl: "card.component.html",
  styleUrls: ["card.component.scss"]
})
export class CardComponent implements OnInit {
  @Input() book: PublicBookModel;

  constructor() { }

  ngOnInit(): void {
  }

}
