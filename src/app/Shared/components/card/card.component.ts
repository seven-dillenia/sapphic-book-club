import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthorModel, PublicBookModel } from 'src/app/shared/services/api.v1.service';
import { CoversService } from 'src/app/shared/services/covers.service';

@Component({
  selector: 'book-card',
  templateUrl: "card.component.html",
  styleUrls: ["card.component.scss"]
})
export class CardComponent implements OnInit {
  @Input() book: PublicBookModel;
  authorNames: string = '';
  isLoadingImage: boolean = true;
  coverImageBlobUrl;
  
  constructor(private coverService: CoversService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getCover();
    this.authorNames = this.book.authors?.map(a => a.authorName)?.join(', ');
  }

  // Get grabbing the image from imgur, and we will show skeleton image until we got the actual image
  getCover() {
    this.coverService.getCover(this.book.bookCoverLow).subscribe(async (data) => {
      let unsafeImageUrl = URL.createObjectURL(data);
      this.coverImageBlobUrl = this.sanitizer.bypassSecurityTrustUrl(unsafeImageUrl);
      this.isLoadingImage = false;
    });
  }
}
