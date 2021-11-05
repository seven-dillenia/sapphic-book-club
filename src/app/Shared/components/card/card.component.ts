import { Component, Input, OnInit } from "@angular/core";
import { DeviceType } from "ngx-device-detector";
import { PublicBookModel } from "src/app/shared/services/api.v1.service";

@Component({
  selector: "book-card",
  templateUrl: "card.component.html",
  styleUrls: ["card.component.scss"],
})
export class CardComponent implements OnInit {
  @Input() book: PublicBookModel;
  @Input() deviceType: DeviceType;
  authorNames: string = "";
  coverUrl: string;

  constructor() {}

  ngOnInit(): void {
    this.authorNames = this.book.authors?.map((a) => a.authorName)?.join(", ");
    this.getBookCoverByDevice();
  }

  getBookCoverByDevice() {
    switch (this.deviceType) {
      case DeviceType.Mobile:
        this.coverUrl = this.book.bookCoverThumbnail;
        break;
      case DeviceType.Desktop:
        this.coverUrl = this.book.bookCoverMedium;
        break;
      case DeviceType.Tablet:
      case DeviceType.Unknown:
      default:
        this.coverUrl = this.book.bookCoverLow;
        break;
    }


  }
}
