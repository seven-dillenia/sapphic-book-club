import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthorModel, PublicBookModel } from 'src/app/Shared/Services/api.v1.service';
import { CoversService } from 'src/app/Shared/Services/covers.service';

@Component({
  selector: 'book-card',
  templateUrl: "card.component.html",
  styleUrls: ["card.component.scss"]
})
export class CardComponent implements OnInit {
  @Input() book: PublicBookModel;
  isLoadingImage: boolean = true;
  coverImageBlobUrl;
  
  constructor(private coverService: CoversService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.coverService.getCover(this.book.bookCoverLowRes).subscribe(async (data) => {
      let unsafeImageUrl = URL.createObjectURL(data);
      this.coverImageBlobUrl = this.sanitizer.bypassSecurityTrustUrl(unsafeImageUrl);

      // let objectURL = URL.createObjectURL(data);       
      // this.image = this.sanitizer.bypassSecurityTrustUrl(objectURL);

      // let test = await this.blobToImage(data);
      // this.coverImageBlobUrl = test;

      this.isLoadingImage = false;
    })
  }

  blobToImage = (blob) => {
    return new Promise(resolve => {
      const url = URL.createObjectURL(blob)
      let img = new Image()
      img.onload = () => {
        URL.revokeObjectURL(url)
        resolve(img)
      }
      img.src = url
    })
  }

  authorNames(authorList: AuthorModel[]) {
    return authorList.map(a => a.authorName).join(", ");
  }
}
