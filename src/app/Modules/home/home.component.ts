import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { PublicBookModel } from 'src/app/Shared/Services/api.v1.service';
import { BooksService } from '../../Shared/Services/books.service';

@Component({
  selector: 'app-home',
  templateUrl: "home.component.html",
  styleUrls: ["home.component.scss"]
})
export class HomeComponent implements OnInit {

  public books: Observable<PublicBookModel[]>;
  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    this.bookService.getBooks(1, 12).toPromise();

    this.books = this.bookService.books.pipe(startWith([]));
  }
}
